import { apiFetch, getAuthToken, isLiveStorageConfigured, setAuthToken } from "./apiClient.js";

const CREDENTIALS_KEY = "proma_admin_credentials_v1";
const SESSION_KEY = "proma_blog_admin";

function randomSalt() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password, salt) {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

function normalizeUserId(userId) {
  return userId.trim().toLowerCase();
}

function readCredentials() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CREDENTIALS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.userId || !parsed?.salt || !parsed?.passwordHash) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function usesCloudAuth() {
  return isLiveStorageConfigured();
}

export async function hasAdminAccount() {
  if (isLiveStorageConfigured()) {
    const { hasAdmin } = await apiFetch("/api/auth/status");
    return hasAdmin;
  }
  return readCredentials() !== null;
}

export function isAdminLoggedInLocal() {
  return typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";
}

export function setAdminLoggedInLocal(value) {
  if (value) sessionStorage.setItem(SESSION_KEY, "1");
  else sessionStorage.removeItem(SESSION_KEY);
}

export async function isAdminLoggedIn() {
  if (isLiveStorageConfigured()) {
    return Boolean(getAuthToken());
  }
  return isAdminLoggedInLocal();
}

export async function createAdminAccount(login, password) {
  if (password.length < 8) throw new Error("Password must be at least 8 characters.");

  if (isLiveStorageConfigured()) {
    const adminId = normalizeUserId(login);
    if (!adminId) throw new Error("Choose an admin ID.");
    const { token } = await apiFetch("/api/auth/setup", {
      method: "POST",
      body: JSON.stringify({ adminId, password }),
    });
    setAuthToken(token);
    return;
  }

  const id = normalizeUserId(login);
  if (!id) throw new Error("Choose an admin ID.");
  if (readCredentials()) throw new Error("An admin account already exists on this browser.");

  const salt = randomSalt();
  const passwordHash = await hashPassword(password, salt);
  localStorage.setItem(
    CREDENTIALS_KEY,
    JSON.stringify({ userId: id, salt, passwordHash, createdAt: new Date().toISOString() })
  );
}

export async function verifyAdminLogin(login, password) {
  if (isLiveStorageConfigured()) {
    const adminId = normalizeUserId(login);
    const { token } = await apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ adminId, password }),
    });
    setAuthToken(token);
    return true;
  }

  const stored = readCredentials();
  if (!stored) throw new Error("No admin account yet. Create one first.");
  const id = normalizeUserId(login);
  if (id !== stored.userId) throw new Error("Wrong admin ID or password.");
  const hash = await hashPassword(password, stored.salt);
  if (hash !== stored.passwordHash) throw new Error("Wrong admin ID or password.");
  setAdminLoggedInLocal(true);
  return true;
}

export async function signOutAdmin() {
  if (isLiveStorageConfigured()) {
    setAuthToken(null);
    return;
  }
  setAdminLoggedInLocal(false);
}

export async function changeAdminPassword(currentPassword, newPassword) {
  if (newPassword.length < 8) throw new Error("New password must be at least 8 characters.");

  if (isLiveStorageConfigured()) {
    await apiFetch("/api/auth/password", {
      method: "POST",
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    return;
  }

  const stored = readCredentials();
  if (!stored) throw new Error("No admin account found.");
  const currentHash = await hashPassword(currentPassword, stored.salt);
  if (currentHash !== stored.passwordHash) throw new Error("Current password is wrong.");

  const salt = randomSalt();
  const passwordHash = await hashPassword(newPassword, salt);
  localStorage.setItem(
    CREDENTIALS_KEY,
    JSON.stringify({ userId: stored.userId, salt, passwordHash, createdAt: stored.createdAt })
  );
}

export async function getAdminEmail() {
  if (isLiveStorageConfigured()) {
    if (!getAuthToken()) return null;
    try {
      const { adminId } = await apiFetch("/api/auth/me");
      return adminId;
    } catch {
      setAuthToken(null);
      return null;
    }
  }
  return readCredentials()?.userId ?? null;
}

export function subscribeAdminAuth(onChange) {
  if (isLiveStorageConfigured()) {
    onChange(Boolean(getAuthToken()));
    const onStorage = () => onChange(Boolean(getAuthToken()));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }
  onChange(isAdminLoggedInLocal());
  return () => {};
}

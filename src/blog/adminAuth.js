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

export function hasAdminAccount() {
  return readCredentials() !== null;
}

export function isAdminLoggedIn() {
  return typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";
}

export function setAdminLoggedIn(value) {
  if (value) sessionStorage.setItem(SESSION_KEY, "1");
  else sessionStorage.removeItem(SESSION_KEY);
}

export async function createAdminAccount(userId, password) {
  const id = normalizeUserId(userId);
  if (!id) throw new Error("Choose an admin ID.");
  if (password.length < 8) throw new Error("Password must be at least 8 characters.");
  if (readCredentials()) throw new Error("An admin account already exists on this browser.");

  const salt = randomSalt();
  const passwordHash = await hashPassword(password, salt);
  localStorage.setItem(
    CREDENTIALS_KEY,
    JSON.stringify({ userId: id, salt, passwordHash, createdAt: new Date().toISOString() })
  );
}

export async function verifyAdminLogin(userId, password) {
  const stored = readCredentials();
  if (!stored) throw new Error("No admin account yet. Create one first.");
  const id = normalizeUserId(userId);
  if (id !== stored.userId) throw new Error("Wrong admin ID or password.");
  const hash = await hashPassword(password, stored.salt);
  if (hash !== stored.passwordHash) throw new Error("Wrong admin ID or password.");
  return true;
}

export async function changeAdminPassword(currentPassword, newPassword) {
  const stored = readCredentials();
  if (!stored) throw new Error("No admin account found.");
  if (newPassword.length < 8) throw new Error("New password must be at least 8 characters.");

  const currentHash = await hashPassword(currentPassword, stored.salt);
  if (currentHash !== stored.passwordHash) throw new Error("Current password is wrong.");

  const salt = randomSalt();
  const passwordHash = await hashPassword(newPassword, salt);
  localStorage.setItem(
    CREDENTIALS_KEY,
    JSON.stringify({ userId: stored.userId, salt, passwordHash, createdAt: stored.createdAt })
  );
}

export function getAdminUserId() {
  return readCredentials()?.userId ?? null;
}

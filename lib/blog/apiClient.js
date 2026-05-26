const TOKEN_KEY = "proma_admin_token";

/** Next.js serves /api on the same origin (Vercel-ready). */
export function isLiveStorageConfigured() {
  return true;
}

function apiBase() {
  return (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
}

export function getAuthToken() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setAuthToken(token) {
  if (typeof window === "undefined") return;
  if (token) sessionStorage.setItem(TOKEN_KEY, token);
  else sessionStorage.removeItem(TOKEN_KEY);
}

export async function apiFetch(path, options = {}) {
  const token = getAuthToken();
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${apiBase()}${path}`, { ...options, headers });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* empty */
  }
  if (!res.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

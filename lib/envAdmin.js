function normalizeAdminId(value) {
  return String(value || "").trim().toLowerCase();
}

export function getEnvAdmin() {
  const adminId = normalizeAdminId(process.env.ADMIN_ID || "");
  const password = String(process.env.ADMIN_PASSWORD || "");
  if (!adminId || password.length < 8) return null;
  return { adminId, password };
}

export function matchEnvAdmin(adminId, password) {
  const env = getEnvAdmin();
  if (!env) return false;
  return normalizeAdminId(adminId) === env.adminId && String(password) === env.password;
}

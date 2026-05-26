import jwt from "jsonwebtoken";

const secret = process.env.ADMIN_JWT_SECRET;

export function signToken(payload) {
  if (!secret || secret.length < 16) {
    throw new Error("ADMIN_JWT_SECRET must be at least 16 characters.");
  }
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

export function verifyToken(token) {
  if (!secret) throw new Error("ADMIN_JWT_SECRET is not configured.");
  return jwt.verify(token, secret);
}

export function getBearerToken(request) {
  const header = request.headers.get("authorization") || "";
  return header.startsWith("Bearer ") ? header.slice(7) : null;
}

export function requireAdmin(request) {
  const token = getBearerToken(request);
  if (!token) {
    const err = new Error("Sign in required.");
    err.status = 401;
    throw err;
  }
  try {
    return verifyToken(token);
  } catch {
    const err = new Error("Session expired. Sign in again.");
    err.status = 401;
    throw err;
  }
}

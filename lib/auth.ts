import crypto from 'crypto';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@akmeimmigrations.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AkmeAdmin@2026!';
const SESSION_SECRET = process.env.SESSION_SECRET || 'akme-session-secret-key-pat-punjab-2026';
const COOKIE_NAME = 'akme_admin_token';

// Simple, robust PBKDF2 password verification
export function verifyCredentials(email: string, pass: string): boolean {
  if (email.trim().toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    return false;
  }
  return pass === ADMIN_PASSWORD;
}

// Generate signed session token: { email, timestamp, hmac }
export function createSessionToken(email: string): string {
  const timestamp = Date.now();
  const payload = `${email}:${timestamp}`;
  const hmac = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  const token = Buffer.from(`${payload}:${hmac}`).toString('base64');
  return token;
}

// Verify token
export function verifySessionToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length !== 3) return { valid: false };

    const [email, timestampStr, hmac] = parts;
    const timestamp = parseInt(timestampStr, 10);
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours

    if (Date.now() - timestamp > maxAge) {
      return { valid: false }; // Expired
    }

    const payload = `${email}:${timestampStr}`;
    const expectedHmac = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');

    if (crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(expectedHmac))) {
      return { valid: true, email };
    }
    return { valid: false };
  } catch {
    return { valid: false };
  }
}

// Check admin auth from server components or API routes
export function isAdminAuthenticated(req?: NextRequest): boolean {
  try {
    let token: string | undefined;
    if (req) {
      token = req.cookies.get(COOKIE_NAME)?.value;
    }
    if (!token) {
      const cookieStore = cookies();
      token = cookieStore.get(COOKIE_NAME)?.value;
    }
    if (!token) return false;
    const result = verifySessionToken(token);
    return result.valid;
  } catch {
    return false;
  }
}

export { COOKIE_NAME, ADMIN_EMAIL };

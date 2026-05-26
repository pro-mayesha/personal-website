# Deploy on Vercel

This project is **Next.js** with API routes and **MongoDB Atlas**.

## 1. Push to GitHub

Commit and push this repo.

## 2. Import in Vercel

1. [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
2. Framework preset: **Next.js** (auto-detected).
3. Add **Environment Variables**:

| Name | Value |
|------|--------|
| `MONGODB_URI` | Your Atlas connection string |
| `MONGODB_DB_NAME` | `personal-blogs` |
| `ADMIN_JWT_SECRET` | Long random string (`openssl rand -base64 32`) |

4. **Deploy**.

## 3. MongoDB Atlas

- **Network Access** → allow `0.0.0.0/0` (or Vercel IP ranges if you restrict).
- Rotate password if it was ever committed to git.

## 4. Custom domain

Vercel → Project → **Settings** → **Domains** → add your domain and follow DNS instructions.

## 5. Admin

1. Open `https://your-domain.com/admin`
2. **Create admin account** (first time only)
3. Optional: **Copy starter notes to live database**
4. Publish notes

## Local dev

```bash
cp .env.example .env.local
# fill in MONGODB_URI and ADMIN_JWT_SECRET
npm install
npm run dev
```

Open http://localhost:3000

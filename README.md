# Proma — personal website (Next.js)

Notebook-style personal site with live notes stored in **MongoDB Atlas**, admin dashboard, and **Vercel-ready** deployment.

## Stack

- **Next.js 14** (App Router)
- **React 18** + Tailwind CSS + Framer Motion
- **MongoDB Atlas** via `/api/*` route handlers
- Deploy on **[Vercel](docs/VERCEL-DEPLOY.md)**

## Quick start

```bash
cp .env.example .env.local
# Add MONGODB_URI and ADMIN_JWT_SECRET (see docs/MONGODB-SETUP.md)

npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Run production build locally |

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/notes` | All notes |
| `/notes/:slug` | Single note |
| `/admin` | Admin dashboard |
| `/api/posts` | Notes API (MongoDB) |

## Environment variables

Set in `.env.local` (local) and **Vercel → Settings → Environment Variables** (production):

| Variable | Where | Purpose |
|----------|--------|---------|
| `MONGODB_URI` | Server only | Atlas connection string |
| `MONGODB_DB_NAME` | Server only | Database name (default `personal-blogs`) |
| `ADMIN_JWT_SECRET` | Server only | Signs admin sessions (16+ chars) |

Never put `MONGODB_URI` in a `NEXT_PUBLIC_` variable.

## Docs

- [MongoDB setup](docs/MONGODB-SETUP.md)
- [Deploy on Vercel](docs/VERCEL-DEPLOY.md)

## Admin

1. Go to `/admin`
2. Create your admin ID + password (once)
3. Publish notes — they appear for all visitors

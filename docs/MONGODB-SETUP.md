# Live notes with MongoDB

Notes are stored in **MongoDB Atlas** through a small **Node API** (`server/`). Your MongoDB password stays on the server only — never in the React app.

## Security first

If your MongoDB password was ever pasted into `.env.example`, a chat, or GitHub:

1. Open [MongoDB Atlas](https://cloud.mongodb.com) → **Database Access** → edit the user → **Edit Password**.
2. Update `MONGODB_URI` in your local `.env` with the new password.
3. Never commit `.env` (it is gitignored).

## 1. MongoDB Atlas

1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. **Database Access** → add a database user (username + password).
3. **Network Access** → **Add IP Address** → for development use `0.0.0.0/0` (allow from anywhere). Tighten this later for production.
4. **Connect** → **Drivers** → copy the connection string.
5. Replace `<password>` with your real password and set the database name, e.g.  
   `mongodb+srv://USER:PASSWORD@cluster.mongodb.net/personal-blogs?retryWrites=true&w=majority`

## 2. Local `.env`

Copy `.env.example` to `.env` and fill in:

```env
MONGODB_URI=mongodb+srv://...
MONGODB_DB_NAME=personal-blogs
ADMIN_JWT_SECRET=use-a-long-random-string-at-least-32-characters
PORT=3001
VITE_LIVE_NOTES=true
```

Generate a JWT secret (terminal):

```bash
openssl rand -base64 32
```

## 3. Run locally

```bash
cp .env.example .env.local
# fill MONGODB_URI and ADMIN_JWT_SECRET
npm install
npm run dev
```

Open http://localhost:3000

Check API: http://localhost:3000/api/health → `{ "ok": true, "storage": "mongodb" }`

## 4. Admin dashboard

1. Open http://localhost:5173/admin  
2. **Create admin account** → pick an admin ID + password (8+ chars)  
3. Optional: **Copy starter notes to live database**  
4. Publish notes — they are stored in MongoDB and show on the site for everyone  

## 5. Deploy on Vercel

See **[VERCEL-DEPLOY.md](./VERCEL-DEPLOY.md)**. Add `MONGODB_URI`, `MONGODB_DB_NAME`, and `ADMIN_JWT_SECRET` in the Vercel dashboard.

## Collections

The API creates:

| Collection | Purpose |
|------------|---------|
| `posts` | Published notes |
| `admin` | One admin login (hashed password) |

## Without MongoDB

If `MONGODB_URI` is missing, API routes fail and the site falls back to built-in seed content only.

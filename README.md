# Portfolio — pnpm Monorepo

```
portfolio/
├── apps/
│   ├── frontend/    ← Next.js 16 · Deploy to Vercel
│   └── backend/     ← Express + Prisma · Deploy to Render
├── packages/        ← Shared utilities (optional)
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## Quick Start

```bash
# Install all dependencies
pnpm install

# Copy env files
cp apps/frontend/.env.example apps/frontend/.env.local
cp apps/backend/.env.example apps/backend/.env

# Run database migrations (backend)
pnpm --filter @portfolio/backend prisma:migrate

# Start both apps in parallel
pnpm dev
```

## Apps

### Frontend (`apps/frontend`)
- Next.js 16 with App Router
- Tailwind CSS v4, Framer Motion
- Talks to the backend via `NEXT_PUBLIC_API_URL`
- Deploy: Vercel

### Backend (`apps/backend`)
- Express 4 + TypeScript
- Prisma ORM with PostgreSQL
- JWT auth for admin routes
- Deploy: Render (set env vars in dashboard)

## Environment Variables

### Frontend (`.env.local`)
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend base URL (e.g. `https://api.yoursite.com`) |

### Backend (`.env`)
| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `ADMIN_PASSWORD` | Password for admin login |
| `JWT_SECRET` | Secret for signing JWTs (32+ chars) |
| `PORT` | Port to listen on (default `4000`) |
| `ALLOWED_ORIGINS` | Comma-separated allowed CORS origins |

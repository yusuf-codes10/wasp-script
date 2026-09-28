# ⚡ WaspScript

> The right place to drill JavaScript. Bite-sized challenges that make you actually `think()`. No fluff, just code.

**[→ Live Demo](https://wasp-script-web.vercel.app)**

---

## What is WaspScript?

WaspScript is a JavaScript challenge platform where developers can sharpen their skills through focused, bite-sized coding problems. Complete challenges, climb the leaderboard, and track your progress on your personal dashboard.

## Features

- 50+ JavaScript challenges
- User authentication (register & sign in)
- Leaderboard to compete with others
- Personal dashboard to track progress

## Tech Stack

This is a **Bun monorepo** with two apps and two shared packages.

```
wasp-script/
├── apps/
│   ├── api/        # Hono API (deployed on Render)
│   └── web/        # Vue 3 + Vite frontend (deployed on Vercel)
└── packages/
    ├── db/         # Drizzle ORM + database schema
    └── shared/     # Shared types & Zod validation schemas
```

| Layer | Technology |
|---|---|
| Runtime | Bun |
| Language | TypeScript |
| Frontend | Vue 3, Vite, Tailwind CSS |
| Backend | Hono |
| Database | Drizzle ORM |
| Auth | JWT + HttpOnly cookies |
| Deployment | Vercel (web) + Render (api) |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0+

### Install dependencies

```bash
bun install
```

### Environment variables

Create `.env` in `apps/api/`:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

Create `.env` in `apps/web/`:

```env
VITE_API_URL=http://localhost:3000
```

### Run locally

```bash
# API
cd apps/api
bun run --watch src/server.ts

# Web (in a separate terminal)
cd apps/web
bun run dev
```

## Deployment

| App | Platform | Config |
|---|---|---|
| `apps/web` | Vercel | Root directory: `apps/web` |
| `apps/api` | Render | Root directory: `apps/api`, Start: `bun run src/server.ts` |

> **Note:** Cross-domain cookies require `SameSite=None; Secure` on the API and `withCredentials: true` on the frontend.
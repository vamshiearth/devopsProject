# DevOps Project

Monorepo for a free-tier stack:

- `frontend/` - Create React App
- `backend/` - Django + DRF
- `docker-compose.yml` - local Postgres

## Local setup

1) Start Postgres

```bash
docker compose up -d
```

2) Backend

```bash
cd backend
.\.venv\Scripts\python -m pip install -r requirements.txt
.\.venv\Scripts\python manage.py migrate
.\.venv\Scripts\python manage.py runserver
```

Health check:

```
http://127.0.0.1:8000/health/
```

3) Frontend

```bash
cd frontend
npm.cmd install
npm.cmd start
```

## Env files

- Copy `.env.example` -> `.env` at repo root for local Postgres.
- Never commit `.env`.

## Firebase Auth

- Enable Email/Password in Firebase Auth.
- Add a Web App and copy config into:
  - `frontend/.env`
  - `frontend/src/firebase.js` (wired to env vars)
- Add Netlify domain to Firebase Authorized domains.

## Neon Postgres

- Create a Neon project (free tier).
- Copy the connection string for Render `DATABASE_URL`.

## Render (backend)

Settings:
- Root Directory: `backend`
- Build Command: `pip install -r requirements.txt && python manage.py migrate`
- Start Command: `gunicorn backend.wsgi:application`

Env vars (Render):
- `DATABASE_URL` = Neon connection string
- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG` = `False`
- `ALLOWED_HOSTS` = your Render domain
- `CORS_ALLOWED_ORIGINS` = your Netlify domain
- `FIREBASE_PROJECT_ID`

Endpoints:
- `/` root
- `/health/`
- `/me/` (auth)

## Netlify (frontend)

Build settings:
- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `build`

Env vars (Netlify):
- `REACT_APP_API_URL` = Render API URL
- Firebase web config values (REACT_APP_FIREBASE_*)

## CI (GitHub Actions)

- Workflow at `.github/workflows/ci.yml`
- Runs frontend lint/tests/build, backend lint/checks/tests, and basic audits.

# pagina web bushi saiteki suchi

Estructura base generada desde `maqueta del proyecto.txt`.

Run frontend:

```bash
cd frontend
npm install
npm run dev
```

Run backend:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Deployment (Vercel via GitHub Actions):

1. Add repository secrets in GitHub: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
2. Push to `main` branch — the workflow `.github/workflows/deploy.yml` will build and deploy the frontend to Vercel.

Environment variables:
- `NEXT_PUBLIC_API_URL` — URL to backend API (e.g. https://your-backend.vercel.app or http://127.0.0.1:8000 for local dev)

To run locally:

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

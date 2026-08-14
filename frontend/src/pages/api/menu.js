const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'

export default async function handler(req, res) {
  try {
    const r = await fetch(`${BASE}/api/menu`)
    const data = await r.json()
    res.status(r.status).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

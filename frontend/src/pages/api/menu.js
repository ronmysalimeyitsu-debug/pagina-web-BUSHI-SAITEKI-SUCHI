const DEV_BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'

export default async function handler(req, res) {
  try {
    const isDev = process.env.NODE_ENV !== 'production'
    let url
    if (isDev) {
      url = `${DEV_BACKEND}/api/menu`
    } else {
      const host = process.env.VERCEL_URL || req.headers['x-forwarded-host'] || req.headers.host
      url = `https://${host}/api/backend/menu`
    }
    const r = await fetch(url)
    const data = await r.json()
    res.status(r.status).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

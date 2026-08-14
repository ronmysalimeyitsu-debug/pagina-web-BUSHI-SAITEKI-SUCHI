const DEV_BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'

export default async function handler(req, res) {
  try {
    const isDev = process.env.NODE_ENV !== 'production'
    let url
    if (isDev) {
      url = `${DEV_BACKEND}/api/menu`
    } else {
      const prodBackend = process.env.NEXT_PUBLIC_API_URL
      if (prodBackend) {
        url = `${prodBackend.replace(/\/$/, '')}/api/menu`
      } else {
        const host = process.env.VERCEL_URL || req.headers['x-forwarded-host'] || req.headers.host
        url = `https://${host}/api/backend/menu`
      }
    }
    const r = await fetch(url)
    if (!r.ok) {
      const text = await r.text()
      console.error('Upstream fetch failed', { url, status: r.status, body: text.slice(0, 2000) })
      return res.status(502).json({ error: 'upstream_error', status: r.status, body: text })
    }
    const data = await r.json()
    res.status(r.status).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

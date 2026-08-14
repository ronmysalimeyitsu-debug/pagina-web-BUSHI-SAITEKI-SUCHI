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
      // Fallback: return static menu in production so the frontend still shows data
      const staticMenu = [
        { id: 1, name: 'Sushi Rolls', price: 12.5, desc: 'Rolls variados', img: '/menu/item1.png' },
        { id: 2, name: 'Nigiri', price: 9.0, desc: 'Pescado sobre arroz', img: '/menu/item2.png' },
        { id: 3, name: 'Sashimi', price: 14.0, desc: 'Pescado en láminas', img: '/menu/item3.png' }
      ]
      return res.status(200).json(staticMenu)
    }
    const data = await r.json()
    res.status(r.status).json(data)
  } catch (err) {
    console.error('Proxy handler error', err)
    const staticMenu = [
      { id: 1, name: 'Sushi Rolls', price: 12.5, desc: 'Rolls variados', img: '/menu/item1.png' },
      { id: 2, name: 'Nigiri', price: 9.0, desc: 'Pescado sobre arroz', img: '/menu/item2.png' },
      { id: 3, name: 'Sashimi', price: 14.0, desc: 'Pescado en láminas', img: '/menu/item3.png' }
    ]
    res.status(200).json(staticMenu)
  }
}

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'

export async function fetchMenu() {
  const res = await fetch(`${BASE}/api/menu`)
  if (!res.ok) throw new Error('Failed to fetch menu')
  return res.json()
}

export const getBaseUrl = () => BASE

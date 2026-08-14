const ENV_BASE = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchMenu() {
  const url = ENV_BASE ? `${ENV_BASE.replace(/\/$/, '')}/api/menu` : '/api/menu'
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch menu')
  return res.json()
}

export const getBaseUrl = () => (ENV_BASE ? ENV_BASE : '/api/menu')

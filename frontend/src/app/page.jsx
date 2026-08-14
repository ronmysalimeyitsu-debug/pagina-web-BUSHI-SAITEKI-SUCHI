import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { fetchMenu, getBaseUrl } from '../lib/api'
import MenuCard from '../components/MenuCard'

export default function Page() {
  const [menu, setMenu] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMenu()
      .then(setMenu)
      .catch((e) => setError(e.message))
  }, [])

  return (
    <main className="p-6">
      <Hero />

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Menú</h2>
        {error && <div className="text-red-600">Error: {error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500">API base: {getBaseUrl()}</div>
      </section>
    </main>
  )
}

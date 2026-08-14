import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="relative rounded-lg overflow-hidden bg-black text-white" style={{ backgroundImage: 'url(/images/MENU BUSHI.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black/80 p-8">
          <div className="flex items-center gap-4 max-w-6xl mx-auto">
            <div className="bg-black p-2 rounded-lg" style={{ width: 96, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo.svg" alt="Bushi logo" className="w-20 h-20 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Bushi Saiteki Suchi</h1>
              <p className="text-sm text-gray-200">Bienvenidos a nuestra maqueta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="flex items-center gap-4">
        <picture>
          <source type="image/svg+xml" srcSet="/logo.svg 1x, /logo@2x.svg 2x" />
          <img src="/logo.svg" srcSet="/logo.svg 1x, /logo@2x.svg 2x" alt="Bushi logo" className="w-24 h-24 object-contain" />
        </picture>
        <div>
          <h1>Bushi Saiteki Suchi</h1>
          <p>Bienvenidos a nuestra maqueta.</p>
        </div>
      </div>
    </section>
  )
}

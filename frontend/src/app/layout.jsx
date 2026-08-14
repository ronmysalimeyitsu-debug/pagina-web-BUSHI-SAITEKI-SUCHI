import React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Bushi Saiteki Suchi',
  description: 'Maqueta de la página web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}

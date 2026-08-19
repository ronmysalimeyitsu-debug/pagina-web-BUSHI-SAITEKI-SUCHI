'use client';

export default function Home() {
  // ... (el menú sigue igual)

  return (
    <main style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/fondo-bushi.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#f5f5f5', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif' 
    }}>
      {/* ... (el resto del contenido sigue igual) */}
    </main>
  );
}
'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error('Error fetching menu:', err));
  }, []);

  return (
    <main>
      {/* Encabezado con el logo corregido */}
      <header style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        padding: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px' 
      }}>
        <img 
          src="/images/logo-bushi.jpg" 
          alt="Bushi Saiteki Logo" 
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
        />
        <div>
          <h1 style={{ margin: 0 }}>Bushi Saiteki Suchi</h1>
          <p style={{ margin: 0 }}>Bienvenidos a nuestra maqueta.</p>
        </div>
      </header>

      {/* Sección del Menú */}
      <section style={{ padding: '30px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Menú</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {menu.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} />
              <h3 style={{ margin: '10px 0 5px 0' }}>{item.name}</h3>
              <p style={{ color: '#555', margin: '0 0 10px 0' }}>{item.desc}</p>
              <p style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>${item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
'use client';

export default function Home() {
  const menuCategories = [
    {
      category: "Aperitivos y Especialidades",
      items: [
        {
          name: "Bushi Crispy Pizza",
          desc: "Base crocante de arroz de sushi cubierta con nuestra mezcla especial de pescados, quesos y especias japonesas, gratinada al horno y servida en cuatro porciones.",
          price: "10.50",
          img: "/images/bushi-crispy-pizza.jpg"
        },
        {
          name: "Tekebuchi Saiteki",
          desc: "Crujientes bocados de mozzarella rellenos con nuestra exclusiva mezcla, dorados a la perfección y acompañados con salsa Fuji y salsa de anguila.",
          price: "9.00",
          img: "/images/tekebuchi-saiteki.jpg"
        }
      ]
    },
    {
      category: "Sashimi Japonés",
      items: [
        {
          name: "Sashimi de Atún",
          desc: "Cuatro piezas de atún fresco cuidadosamente seleccionadas, cortadas al estilo tradicional japonés para disfrutar su sabor.",
          price: "14.00",
          img: "/images/sashimi-de-atun.jpg"
        },
        {
          name: "Sashimi de Salmón",
          desc: "Cuatro piezas de salmón fresco cuidadosamente seleccionadas, cortadas al estilo tradicional japonés para resaltar su textura suave y delicado sabor.",
          price: "15.00",
          img: "/images/sashimi-de-salmon.jpg"
        }
      ]
    },
    {
      category: "Ensaladas Premium",
      items: [
        {
          name: "Saiteki Ocean",
          desc: "Fresca ensalada de wakame y cangrejo desmenuzado, bañado en ponzu y spicy mayo, coronado con cortes de salmón al grill y sashimi de atún sellado.",
          price: "13.50",
          img: "/images/saiteki-ocean.jpg"
        }
      ]
    },
    {
      category: "Rollos de Autor",
      items: [
        {
          name: "Tropical Fry Roll",
          desc: "Rollo tempurizado relleno, con cobertura de coco rallado y reducción tropical de parchita y mango.",
          price: "12.50",
          img: "/images/tropical-fry-roll.jpg"
        },
        {
          name: "Zen Roll",
          desc: "Uramaki relleno con combinación única de frescura, zanahoria y texturas de autor.",
          price: "11.50",
          img: "/images/zen-roll.jpg"
        },
        {
          name: "Fuji Roll",
          desc: "Rollos tempurizados rellenos con una exquisita combinación de queso crema, aguacate, cebollín y coronados con salsa Fuji y salsa de anguila.",
          price: "13.00",
          img: "/images/fuji-roll.jpg"
        }
      ]
    }
  ];

  return (
    <main style={{ 
      backgroundImage: "linear-gradient(rgba(10, 10, 12, 0.45), rgba(10, 10, 12, 0.65)), url('/images/fondo-pagina-bushi.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: '0 0 60px 0',
      boxSizing: 'border-box',
      color: '#f5f5f5', 
      fontFamily: 'sans-serif'
    }}>
      
      {/* Guirnalda de luces vintage */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '14px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#ffcc00',
              borderRadius: '50%',
              boxShadow: '0 0 12px #ffcc00, 0 0 22px #ffa500'
            }}></div>
          ))}
        </div>
      </div>

      {/* Header Principal con Logo */}
      <header style={{ 
        backgroundColor: 'rgba(15, 15, 20, 0.88)', 
        backdropFilter: 'blur(10px)',
        color: 'white', 
        padding: '30px 20px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '20px',
        borderBottom: '2px solid #d4af37',
        boxShadow: '0 4px 25px rgba(0,0,0,0.8)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <img 
            src="/images/logo-bushi.jpg" 
            alt="Bushi Saiteki Logo" 
            style={{ 
              width: '110px', 
              height: '110px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '3px solid #d4af37', 
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' 
            }} 
          />
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '2.8rem', letterSpacing: '3px', color: '#f39c12', fontFamily: 'serif' }}>
              BUSHI SAITEKI
            </h1>
            <p style={{ margin: '8px 0 0 0', color: '#ddd', fontSize: '1.1rem', fontStyle: 'italic' }}>
              Auténtico Sushi de Autor & Street Food Trailer
            </p>
          </div>
        </div>

        {/* Barra Rápida de Contacto & Redes en Header */}
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
          <a 
            href="https://wa.me/584142044493?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Bushi%20Saiteki" 
            target="_blank" 
            rel="noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)'
            }}
          >
            💬 Pedir WhatsApp 1
          </a>
          <a 
            href="https://wa.me/584242882861?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Bushi%20Saiteki" 
            target="_blank" 
            rel="noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)'
            }}
          >
            💬 Pedir WhatsApp 2
          </a>
          <a 
            href="https://www.instagram.com/bushisaiteki" 
            target="_blank" 
            rel="noreferrer"
            style={{
              backgroundColor: '#C13584',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(193, 53, 132, 0.4)'
            }}
          >
            📸 Instagram
          </a>
          <a 
            href="https://www.tiktok.com/@bushi.saiteki" 
            target="_blank" 
            rel="noreferrer"
            style={{
              backgroundColor: '#000000',
              border: '1px solid #d4af37',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
            }}
          >
            🎵 TikTok
          </a>
        </div>
      </header>

      {/* Contenedor del Menú Digital */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto', 
        padding: '35px 25px',
        backgroundColor: 'rgba(14, 14, 18, 0.88)',
        backdropFilter: 'blur(8px)',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.9)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.2rem', 
          marginBottom: '45px', 
          borderBottom: '2px solid rgba(243, 156, 18, 0.4)', 
          paddingBottom: '15px', 
          color: '#f39c12', 
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Menú Digital
        </h2>

        {menuCategories.map((cat, index) => (
          <div key={index} style={{ marginBottom: '55px' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: '#e67e22', 
              borderLeft: '4px solid #e67e22', 
              paddingLeft: '14px', 
              marginBottom: '25px', 
              textTransform: 'uppercase', 
              letterSpacing: '1px'
            }}>
              {cat.category}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              {cat.items.map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'rgba(27, 27, 36, 0.92)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#fff' }}>{item.name}</h4>
                      <p style={{ color: '#bbb', fontSize: '0.92rem', margin: '0 0 20px 0', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#2ecc71' }}>${item.price}</span>
                      <a 
                        href={`https://wa.me/584142044493?text=Hola!%20Quiero%20pedir:%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '0.82rem', backgroundColor: 'rgba(46, 204, 113, 0.2)', padding: '6px 12px', borderRadius: '6px', color: '#2ecc71', border: '1px solid #2ecc71', textDecoration: 'none', fontWeight: 'bold' }}
                      >
                        Pedir este plato
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sección de Pedidos Directos y Redes Sociales (Footer Interno) */}
        <div style={{
          marginTop: '60px',
          padding: '30px',
          backgroundColor: 'rgba(20, 20, 26, 0.95)',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#f39c12', fontSize: '1.8rem', margin: '0 0 10px 0' }}>¡Haz Tu Pedido Directo!</h3>
          <p style={{ color: '#ccc', marginBottom: '25px' }}>Atención rápida por WhatsApp o llamadas telefónicas:</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <div style={{ backgroundColor: '#181820', padding: '15px 25px', borderRadius: '10px', border: '1px solid #333' }}>
              <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '0.85rem' }}>LÍNEA PRINCIPAL</p>
              <a href="tel:04142044493" style={{ color: '#f39c12', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                📞 0414-2044493
              </a>
              <a href="https://wa.me/584142044493?text=Hola!%20Quiero%20realizar%20un%20pedido" target="_blank" rel="noreferrer" style={{ color: '#2ecc71', fontSize: '0.9rem', textDecoration: 'none' }}>
                💬 Abrir WhatsApp
              </a>
            </div>

            <div style={{ backgroundColor: '#181820', padding: '15px 25px', borderRadius: '10px', border: '1px solid #333' }}>
              <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '0.85rem' }}>LÍNEA SECUNDARIA</p>
              <a href="tel:04242882861" style={{ color: '#f39c12', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                📞 0424-2882861
              </a>
              <a href="https://wa.me/584242882861?text=Hola!%20Quiero%20realizar%20un%20pedido" target="_blank" rel="noreferrer" style={{ color: '#2ecc71', fontSize: '0.9rem', textDecoration: 'none' }}>
                💬 Abrir WhatsApp
              </a>
            </div>
          </div>

          <h4 style={{ color: '#fff', margin: '20px 0 15px 0' }}>Síguenos en nuestras redes</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/bushisaiteki" target="_blank" rel="noreferrer" style={{ color: '#e1306c', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
              📸 @bushisaiteki (Instagram)
            </a>
            <a href="https://www.tiktok.com/@bushi.saiteki" target="_blank" rel="noreferrer" style={{ color: '#25a4e2', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
              🎵 @bushi.saiteki (TikTok)
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
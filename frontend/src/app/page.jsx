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
      backgroundImage: "linear-gradient(rgba(12, 12, 15, 0.65), rgba(12, 12, 15, 0.75)), url('/images/fondo-bushi.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#f5f5f5', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      paddingBottom: '60px'
    }}>
      
      {/* Guirnalda de luces estilo faroles */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '14px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
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
        backgroundColor: 'rgba(18, 18, 24, 0.82)', 
        backdropFilter: 'blur(8px)',
        color: 'white', 
        padding: '35px 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '25px',
        borderBottom: '2px solid #d4af37',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)'
      }}>
        <img 
          src="/images/logo-bushi.jpg" 
          alt="Bushi Saiteki Logo" 
          style={{ 
            width: '120px', 
            height: '120px', 
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
      </header>

      {/* Menú Digital Interactivo */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
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
              letterSpacing: '1px',
              textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}>
              {cat.category}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              {cat.items.map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'rgba(20, 20, 28, 0.85)', 
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.7)',
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '14px' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#2ecc71' }}>${item.price}</span>
                      <span style={{ fontSize: '0.8rem', backgroundColor: 'rgba(243, 156, 18, 0.2)', padding: '5px 10px', borderRadius: '5px', color: '#f39c12', border: '1px solid #f39c12' }}>
                        Recomendado
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
'use client';

import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuCategories = [
    {
      category: "Aperitivos",
      items: [
        {
          name: "Saiteki Ocean",
          desc: "Fresca ensalada de wakame y cangrejo desmenuzado, bañada en ponzu y spicy mayo. Coronada con cortes de salmón al grill y sashimi de atún sellado.",
          price: "6.00",
          img: "/images/saiteki-ocean.jpg"
        },
        {
          name: "Tekebuchi Saiteki",
          desc: "Crujientes bocados de mozzarella rellenos con nuestra exclusiva mezcla gratinada de camarones y especias.",
          price: "6.00",
          img: "/images/teque-bushi.jpg"
        },
        {
          name: "Sashimi de Salmón",
          desc: "Cuatro piezas de salmón fresco seleccionadas, cortadas al estilo tradicional japonés.",
          price: "6.00",
          img: "/images/sashimi-de-salmon.jpg"
        },
        {
          name: "Sashimi de Atún",
          desc: "Cuatro piezas de atún fresco seleccionadas, cortadas al estilo tradicional japonés.",
          price: "6.00",
          img: "/images/sashimi-atun.jpg"
        }
      ]
    },
    {
      category: "Rollos Tempurizados",
      items: [
        {
          name: "Tiger Roll",
          desc: "Rollo crocante relleno con queso crema, cebollín y salmón fresco, coronado con ensalada dinamita.",
          price: "6.00",
          img: "/images/tiger-roll.jpg"
        },
        {
          name: "Fuji Roll Tempurizado",
          desc: "Rollo tempurizado envuelto en cobertura crocante, relleno con queso crema, aguacate y camarones.",
          price: "6.00",
          img: "/images/fuji-roll-tempurizado.jpg"
        },
        {
          name: "Tropical Fry Roll",
          desc: "Rollo tempurizado relleno de salmón, queso crema y piña al grill, envuelto en coco.",
          price: "6.00",
          img: "/images/tropical-fry-roll.jpg"
        }
      ]
    },
    {
      category: "Opción Veggie",
      items: [
        {
          name: "Zen Roll",
          desc: "Uramaki relleno con zanahoria kimpa, pepino, aguacate y cebollín con toque de polvo de cotufa.",
          price: "5.00",
          img: "/images/zen-roll.jpg"
        }
      ]
    },
    {
      category: "Rollos Fríos",
      items: [
        {
          name: "Alaska Roll",
          desc: "Clásico uramaki relleno con salmón fresco, queso crema y aguacate.",
          price: "5.00",
          img: "/images/alaska-roll.jpg"
        },
        {
          name: "California Roll",
          desc: "Clásico uramaki relleno con pepino, aguacate y cangrejo.",
          price: "5.00",
          img: "/images/california-roll.jpg"
        },
        {
          name: "Fuji Roll Frío",
          desc: "Uramaki relleno con queso crema, aguacate, cebollín y camarones con salsa Fuji.",
          price: "6.00",
          img: "/images/fuji-roll.jpg"
        }
      ]
    },
    {
      category: "Rollos Especiales",
      items: [
        {
          name: "Acevichado Roll",
          desc: "Exclusivo roll relleno con pescado tempurizado, queso crema y kani, con topping de aguacate.",
          price: "7.50",
          img: "/images/acevichado-roll.jpg"
        },
        {
          name: "Bushido Roll",
          desc: "Uramaki relleno con queso crema, cebolla encurtida y camarón crocante.",
          price: "7.00",
          img: "/images/bushido-roll.jpg"
        },
        {
          name: "Ronin Roll",
          desc: "Uramaki relleno con atún tataki, queso crema ponzu y aguacate.",
          price: "8.00",
          img: "/images/ronin-roll.jpg"
        },
        {
          name: "Kaminari Roll",
          desc: "Combinación de queso crema, jalapeño y camarones crocantes con parmesano flameado.",
          price: "8.00",
          img: "/images/kaminari-roll.jpg"
        },
        {
          name: "Plátano Roll",
          desc: "Roll relleno con salmón y kani crocante, envuelto en plátano maduro sin arroz.",
          price: "8.00",
          img: "/images/platano-roll.jpg"
        },
        {
          name: "Bushi Pizza Roll",
          desc: "Uramaki relleno de tocineta, queso crema y camarón, cubierto con pasta sabor pizza gratinada.",
          price: "8.50",
          img: "/images/bushi-pizza-roll.jpg"
        }
      ]
    }
  ];

  return (
    <main style={{ 
      backgroundImage: "linear-gradient(rgba(10, 10, 12, 0.5), rgba(10, 10, 12, 0.7)), url('/images/fondo-pagina-bushi.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: '0 0 60px 0',
      color: '#f5f5f5', 
      fontFamily: 'sans-serif'
    }}>
      <header style={{ 
        backgroundColor: 'rgba(12, 12, 16, 0.92)', 
        padding: '30px 20px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        gap: '20px',
        borderBottom: '2px solid #d4af37'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px', flexWrap: 'wrap' }}>
          <img 
            src="/images/logo-bushi.jpg" 
            alt="Logo" 
            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #d4af37' }} 
          />
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#f39c12' }}>BUSHI SAITEKI</h1>
            <p style={{ margin: '5px 0 0 0', color: '#ddd' }}>Auténtico Sushi de Autor & Street Food Trailer</p>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              backgroundColor: '#d4af37',
              color: '#0c0c10',
              padding: '12px 24px',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: 'none',
              fontSize: '1rem'
            }}
          >
            📜 Ver Menú Completo (Imágenes)
          </button>
        </div>

        {menuCategories.map((cat, index) => (
          <div key={index} style={{ marginBottom: '45px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#e67e22', borderLeft: '4px solid #e67e22', paddingLeft: '10px', marginBottom: '20px' }}>
              {cat.category}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {cat.items.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: 'rgba(27, 27, 36, 0.95)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '180px', backgroundColor: '#000' }}>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '15px' }}>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#fff' }}>{item.name}</h4>
                    <p style={{ color: '#bbb', fontSize: '0.9rem', margin: '0 0 15px 0' }}>{item.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2ecc71' }}>${item.price}</span>
                      <a 
                        href={`https://wa.me/584142044493?text=Hola!%20Quiero%20pedir:%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '0.8rem', background: '#27ae60', padding: '6px 12px', borderRadius: '6px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
                      >
                        Pedir plato
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', overflowY: 'auto' }}>
          <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ color: '#f39c12', fontWeight: 'bold' }}>Menú en Imágenes</span>
            <button onClick={() => setIsModalOpen(false)} style={{ backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '5px', cursor: 'pointer' }}>Cerrar</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', width: '100%' }}>
            <img src="/images/menu-bushi-saiteki.jpg" alt="Menu 1" style={{ width: '100%', borderRadius: '8px' }} />
            <img src="/images/menu-bushi-saiteki2.jpg" alt="Menu 2" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>
      )}
    </main>
  );
}
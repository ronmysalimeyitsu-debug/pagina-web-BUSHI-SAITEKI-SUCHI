'use client';

export default function Home() {
  const menuCategories = [
    {
      category: "Aperitivos (Appetizers)",
      items: [
        {
          name: "Saiteki Ocean",
          desc: "Fresca ensalada de wakame y cangrejo desmenuzado, bañada en ponzu y spicy mayo. Coronada con cortes de salmón al grill y sashimi de atún sellado.",
          price: "6.00",
          img: "/images/saiteki-ocean.jpg"
        },
        {
          name: "Tekebuchi Saiteki",
          desc: "Crujientes bocados de mozzarella rellenos con nuestra exclusiva mezcla gratinada de camarones y especias de inspiración japonesa. Dorados a la perfección y acompañados con salsa Fuji y salsa de anguila.",
          price: "6.00",
          img: "/images/teque-bushi.jpg"
        },
        {
          name: "Sashimi de Salmón",
          desc: "Cuatro piezas de salmón fresco cuidadosamente seleccionadas, cortadas al estilo tradicional japonés para resaltar su textura suave y su delicado sabor.",
          price: "6.00",
          img: "/images/sashimi-de-salmon.jpg"
        },
        {
          name: "Sashimi de Atún",
          desc: "Cuatro piezas de atún fresco cuidadosamente seleccionadas, cortadas al estilo tradicional japonés para disfrutar su sabor limpio y delicado.",
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
          desc: "Rollo crocante relleno con queso crema, cebollín y salmón fresco, coronado con nuestra ensalada dinamita y salsa de anguila.",
          price: "6.00",
          img: "/images/tiger-roll.jpg"
        },
        {
          name: "Fuji Roll Tempurizado",
          desc: "Delicioso rollo tempurizado envuelto en nuestra cobertura crocante de cereal, relleno con queso crema, aguacate, cebollín y camarones. Coronado con camarones crocantes, salsa Fuji y salsa de anguila.",
          price: "6.00",
          img: "/images/fuji-roll-tempurizado.jpg"
        },
        {
          name: "Tropical Fry Roll",
          desc: "Rollo tempurizado relleno de salmón, queso crema, parchita y piña al grill, envuelto en coco rallado y frito hasta lograr una textura crocante. Coronado con reducción tropical de parchita y mango.",
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
          desc: "Uramaki relleno con zanahoria kimpa, pepino, aguacate y cebollín. Coronado con tajín y nuestro toque especial de polvo de cotufa.",
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
          desc: "Clásico uramaki relleno con salmón fresco, queso crema y aguacate. Finalizado con semillas de ajonjolí.",
          price: "5.00",
          img: "/images/alaska-roll.jpg"
        },
        {
          name: "California Roll",
          desc: "Clásico uramaki relleno con pepino, aguacate y cangrejo. Finalizado con masago, semillas de ajonjolí y coronado con kani desmenuzado crocante.",
          price: "5.00",
          img: "/images/california-roll.jpg"
        },
        {
          name: "Fuji Roll Frío",
          desc: "Uramaki relleno con queso crema, aguacate, cebollín y camarones. Coronado con camarones crocantes y finalizado con nuestra salsa Fuji y salsa de anguila.",
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
          desc: "Exclusivo roll de la casa relleno con pescado tempurizado, queso crema y kani, con topping de aguacate fresco. Bañado con nuestra salsa acevichada y acompañado de puntos de pasta de ají amarillo.",
          price: "7.50",
          img: "/images/acevichado-roll.jpg"
        },
        {
          name: "Bushido Roll",
          desc: "Uramaki relleno con queso crema, cebolla encurtida artesanalmente y camarón crocante. Coronado con aguacate y kani desmenuzado, finalizado con nuestra ensalada especial de kani, wakame y salsa Bushi.",
          price: "7.00",
          img: "/images/bushido-roll.jpg"
        },
        {
          name: "Ronin Roll",
          desc: "Uramaki relleno con atún tataki, queso crema ponzu y aguacate, con topping de cebollín finamente picado. Coronado con tartar cremoso de atún en nuestra selección especial de salsas picantes y semillas de ajonjolí.",
          price: "8.00",
          img: "/images/ronin-roll.jpg"
        },
        {
          name: "Kaminari Roll",
          desc: "Una combinación explosiva de queso crema, jalapeño y camarones crocantes, coronada con quinoa frita, queso parmesano flameado y spicy mayo flameada.",
          price: "8.00",
          img: "/images/kaminari-roll.jpg"
        },
        {
          name: "Plátano Roll",
          desc: "Exclusivo roll de la casa relleno con salmón crocante, kani crocante, queso crema y aguacate, envuelto en finas tajadas de plátano maduro. Coronado con nuestro tartar Vulcano y finalizado con salsa de anguila. Roll sin arroz.",
          price: "8.00",
          img: "/images/platano-roll.jpg"
        },
        {
          name: "Bushi Pizza Roll",
          desc: "Uramaki relleno de tocineta crocante, queso crema y camarón cubierto con cereal crujiente. Coronado con nuestra cremosa pasta sabor pizza, gratinada al horno y finalizado con nuestra salsa especial de pizza.",
          price: "8.50",
          img: "/images/bushi-pizza-roll.jpg"
        }
      ]
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@600;900&display=swap" />

      <main style={{ 
        backgroundImage: "linear-gradient(rgba(10, 10, 12, 0.5), rgba(10, 10, 12, 0.7)), url('/images/fondo-pagina-bushi.jpg')",
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
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)', padding: '14px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', textAlign: 'center', width: '100%' }}>
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

        {/* Header Principal con Logo y Kanji */}
        <header style={{ 
          backgroundColor: 'rgba(12, 12, 16, 0.92)', 
          backdropFilter: 'blur(12px)',
          color: 'white', 
          padding: '30px 20px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '20px',
          borderBottom: '2px solid #d4af37',
          boxShadow: '0 6px 30px rgba(0,0,0,0.85)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px', flexWrap: 'wrap' }}>
            <img 
              src="/images/logo-bushi.jpg" 
              alt="Bushi Saiteki Logo" 
              style={{ 
                width: '115px', 
                height: '115px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                border: '3px solid #d4af37', 
                boxShadow: '0 0 22px rgba(212, 175, 55, 0.6)' 
              }} 
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Noto Serif JP', serif", color: '#d4af37', fontSize: '1.2rem', letterSpacing: '6px', marginBottom: '2px' }}>
                武士最適
              </div>
              <h1 style={{ margin: 0, fontSize: '2.8rem', letterSpacing: '3px', color: '#f39c12', fontFamily: 'serif' }}>
                BUSHI SAITEKI
              </h1>
              <p style={{ margin: '6px 0 0 0', color: '#ddd', fontSize: '1.05rem', fontStyle: 'italic' }}>
                Auténtico Sushi de Autor & Street Food Trailer
              </p>
            </div>
          </div>

          {/* Botones de Contacto y Redes */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
            <a 
              href="https://wa.me/584142044493?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Bushi%20Saiteki" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: 'white',
                padding: '9px 18px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              💬 Pedir WhatsApp 1
            </a>
            <a 
              href="https://wa.me/584242882861?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Bushi%20Saiteki" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: 'white',
                padding: '9px 18px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              💬 Pedir WhatsApp 2
            </a>
            <a 
              href="https://www.instagram.com/bushisaiteki" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                color: 'white',
                padding: '9px 18px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(253, 29, 29, 0.35)'
              }}
            >
              📸 Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@bushi.saiteki" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                border: '1px solid #d4af37',
                color: '#f39c12',
                padding: '9px 18px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)'
              }}
            >
              🎵 TikTok
            </a>
          </div>
        </header>

        {/* Sección "Sobre Nosotros" */}
        <section style={{ 
          maxWidth: '1200px', 
          margin: '35px auto 0 auto', 
          padding: '30px 25px',
          backgroundColor: 'rgba(14, 14, 18, 0.88)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.9)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          boxSizing: 'border-box'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontFamily: "'Noto Serif JP', serif", color: '#f39c12', fontSize: '1.6rem', letterSpacing: '4px' }}>
              武士最適
            </span>
            <h2 style={{ 
              margin: '5px 0 0 0', 
              fontSize: '2rem', 
              color: '#fff', 
              letterSpacing: '2px',
              fontFamily: 'serif'
            }}>
              Sobre Nosotros: La Filosofía Bushi Saiteki
            </h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#d4af37', margin: '12px auto 0 auto', borderRadius: '2px' }}></div>
          </div>

          <div style={{ color: '#ddd', lineHeight: '1.7', fontSize: '1.02rem', textAlign: 'justify', maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ marginBottom: '15px' }}>
              En el Japón feudal, un <strong>Bushi (武士)</strong> o guerrero samurái buscaba incansablemente la perfección, la disciplina y el honor en cada movimiento. Para nosotros, <strong>Saiteki (最適)</strong> representa el estado óptimo: el equilibrio perfecto y la máxima excelencia alcanzable.
            </p>
            <p style={{ margin: 0 }}>
              Al fusionar ambos conceptos creamos el camino del <em>Guerrero Óptimo de la Cocina</em>. Llevamos la rigurosa disciplina del samurái a nuestra barra de sushi y fogones. Cada corte de pescado fresco, la precisión exacta en la temperatura del arroz y la armonía visual de nuestros platos son un tributo a la maestría artesanal japonesa.
            </p>
          </div>
        </section>

        {/* Contenedor del Menú Digital */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '35px auto', 
          padding: '35px 25px',
          backgroundColor: 'rgba(14, 14, 18, 0.88)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.9)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.2rem', 
            marginBottom: '20px', 
            borderBottom: '2px solid rgba(243, 156, 18, 0.4)', 
            paddingBottom: '15px', 
            color: '#f39c12', 
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            MENÚ DE PRODUCTOS (MENÚ DE PLATOS)
          </h2>

          {/* Botón para ver el Menú Completo en HD */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <a
              href="/images/menu-bushi-full.jpg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#d4af37',
                color: '#0c0c10',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 18px rgba(212, 175, 55, 0.5)',
                fontSize: '1rem',
                border: '1px solid #ffffff'
              }}
            >
              📜 Ver Menú Completo (Imagen HD Actualizada)
            </a>
          </div>

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
                    backgroundColor: 'rgba(27, 27, 36, 0.94)', 
                    border: '1px solid rgba(212, 175, 55, 0.2)', 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    {/* Contenedor estricto recortado */}
                    <div style={{ width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#000', position: 'relative' }}>
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transform: 'scale(1.35)',
                          transformOrigin: 'center center',
                          display: 'block'
                        }} 
                      />
                    </div>
                    <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#fff' }}>{item.name}</h4>
                        <p style={{ color: '#bbb', fontSize: '0.92rem', margin: '0 0 20px 0', lineHeight: '1.5' }}>{item.desc}</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '1.35rem', color: '#2ecc71' }}>${item.price}</span>
                        <a 
                          href={`https://wa.me/584142044493?text=Hola!%20Quiero%20pedir:%20${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ 
                            fontSize: '0.82rem', 
                            background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.25), rgba(39, 174, 96, 0.15))', 
                            padding: '7px 14px', 
                            borderRadius: '8px', 
                            color: '#2ecc71', 
                            border: '1px solid #2ecc71', 
                            textDecoration: 'none', 
                            fontWeight: 'bold',
                            boxShadow: '0 2px 8px rgba(46, 204, 113, 0.2)'
                          }}
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

          {/* Sección de Pedidos Directos y Redes Sociales */}
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
              <div style={{ backgroundColor: '#181820', padding: '15px 25px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '0.85rem' }}>LÍNEA PRINCIPAL</p>
                <a href="tel:04142044493" style={{ color: '#f39c12', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                  📞 0414-2044493
                </a>
                <a href="https://wa.me/584142044493?text=Hola!%20Quiero%20realizar%20un%20pedido" target="_blank" rel="noreferrer" style={{ color: '#2ecc71', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold' }}>
                  💬 Abrir WhatsApp
                </a>
              </div>

              <div style={{ backgroundColor: '#181820', padding: '15px 25px', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '0.85rem' }}>LÍNEA SECUNDARIA</p>
                <a href="tel:04242882861" style={{ color: '#f39c12', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                  📞 0424-2882861
                </a>
                <a href="https://wa.me/584242882861?text=Hola!%20Quiero%20realizar%20un%20pedido" target="_blank" rel="noreferrer" style={{ color: '#2ecc71', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold' }}>
                  💬 Abrir WhatsApp
                </a>
              </div>
            </div>

            <h4 style={{ color: '#fff', margin: '20px 0 15px 0' }}>Síguenos en nuestras redes</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/bushisaiteki" target="_blank" rel="noreferrer" style={{ color: '#e1306c', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
                📸 @bushisaiteki (Instagram)
              </a>
              <a href="https://www.tiktok.com/@bushi.saiteki" target="_blank" rel="noreferrer" style={{ color: '#f39c12', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
                🎵 @bushi.saiteki (TikTok)
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
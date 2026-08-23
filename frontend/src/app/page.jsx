'use client';

const menuData = {
  aperitivos: [
    {
      id: "bushi-crispy-pizza",
      nombre: "Bushi Crispy Pizza",
      descripcion: "Base crocante de arroz de sushi cubierta con nuestra mezcla especial de pescados, quesos y especias japonesas, gratinada al horno y servida en cuatro porciones.",
      precio: "$11.00",
      imagen: "/images/bushi-crispy-pizza.jpg"
    },
    {
      id: "tekebuchi-saiteki",
      nombre: "Tekebuchi Saiteki",
      descripcion: "Crujientes bocados de mozzarella rellenos con nuestra exclusiva mezcla, dorados a la perfección y acompañados con salsa Fuji y salsa de anguila.",
      precio: "$6.50",
      imagen: "/images/tekebuchi-saiteki.jpg"
    }
  ],
  rollsEspeciales: [
    {
      id: "kaminari-roll",
      nombre: "Kaminari Roll",
      descripcion: "Queso crema, jalapeño y camarones crocantes, coronado con quinoa frita, queso parmesano y spicy mayo flameada.",
      precio: "$12.00",
      imagen: "/images/kaminari-roll.jpg"
    },
    {
      id: "platano-roll",
      nombre: "Plátano Roll",
      descripcion: "Salmón crocante, kani crocante, queso crema y aguacate, envuelto en plátano maduro con tartar Vulcano y salsa de anguila.",
      precio: "$13.00",
      imagen: "/images/platano-roll.jpg"
    },
    {
      id: "maguro-gratinado",
      nombre: "Maguro Gratinado",
      descripcion: "Atún fresco y queso crema, cubierto con topping gratinado de la casa flameado al momento.",
      precio: "$13.50",
      imagen: "/images/maguro-gratinado.jpg"
    },
    {
      id: "fuji-roll",
      nombre: "Fuji Roll",
      descripcion: "Rollo de autor cubierto con topping cremoso Fuji flameado y especias asiáticas.",
      precio: "$12.00",
      imagen: "/images/fuji-roll.jpg"
    }
  ],
  hotRolls: [
    {
      id: "tiger-roll",
      nombre: "Tiger Roll",
      descripcion: "Rollo crocante relleno con queso crema, cebollín y salmón fresco, servido con ensalada dinamita y salsa de anguila.",
      precio: "$12.00",
      imagen: "/images/tiger-roll.jpg"
    },
    {
      id: "tropical-fry-roll",
      nombre: "Tropical Fry Roll",
      descripcion: "Rollo tempurizado con notas frutales, topping gratinado y reducción de maracuyá.",
      precio: "$12.50",
      imagen: "/images/tropical-fry-roll.jpg"
    }
  ],
  clasicosYVeggie: [
    {
      id: "alaska-roll",
      nombre: "Alaska Roll",
      descripcion: "Clásico uramaki relleno con salmón fresco, queso crema y aguacate, rebozado en ajonjolí tostado.",
      precio: "$9.50",
      imagen: "/images/alaska-roll.jpg"
    },
    {
      id: "zen-roll",
      nombre: "Zen Roll",
      descripcion: "Uramaki relleno con zanahoria kimpa, pepino, aguacate y cebollín. Coronado con tajín y polvo de cotufa.",
      precio: "$8.50",
      imagen: "/images/zen-roll.jpg"
    }
  ],
  ensaladasYSashimis: [
    {
      id: "saiteki-ocean",
      nombre: "Saiteki Ocean",
      descripcion: "Fresca ensalada de wakame y cangrejo desmenuzado en ponzu y spicy mayo, coronada con salmón al grill y sashimi de atún sellado.",
      precio: "$14.00",
      imagen: "/images/saiteki-ocean.jpg"
    },
    {
      id: "sashimi-atun",
      nombre: "Sashimi de Atún",
      descripcion: "Cortes frescos de atún rojo servidos sobre una fina cama de julianas de pepino y repollo blanco.",
      precio: "$10.00",
      imagen: "/images/sashimi-atun.jpg"
    },
    {
      id: "sashimi-salmon",
      nombre: "Sashimi de Salmón",
      descripcion: "Láminas seleccionadas de salmón fresco de corte fino.",
      precio: "$11.00",
      imagen: "/images/sashimi-de-salmon.jpg"
    }
  ]
};

export default function Home() {
  const getWhatsAppLink = (dishName) => {
    const message = encodeURIComponent(`¡Hola! Me gustaría pedir el plato: ${dishName}`);
    return `https://wa.me/584142044493?text=${message}`;
  };

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed text-neutral-100 font-sans relative"
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.92)), url('/images/fondo-bushi.jpg')" }}
    >
      {/* HEADER / HERO SECTION */}
      <header className="relative border-b border-amber-500/30 pt-10 pb-10 px-4 text-center overflow-hidden bg-black/40 backdrop-blur-sm">
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo Circular */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-amber-400/80 overflow-hidden shadow-2xl mb-4 bg-black">
            <img 
              src="/images/logo-bushi.jpg" 
              alt="Bushi Saiteki Logo" 
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-amber-500 font-serif text-lg tracking-widest mb-1">
            武士 最適
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wider text-amber-400 font-serif uppercase mb-2">
            BUSHI SAITEKI
          </h1>

          <p className="text-neutral-300 italic text-sm sm:text-base font-light mb-6">
            Auténtico Sushi de Autor & Street Food Trailer
          </p>

          {/* Botones de Redes y Pedidos */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href="https://wa.me/584142044493"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              💬 Pedir WhatsApp 1
            </a>
            <a
              href="https://wa.me/584242882861"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              💬 Pedir WhatsApp 2
            </a>
            <a
              href="https://instagram.com/bushisaiteki"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:opacity-90 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              📷 Instagram
            </a>
            <a
              href="https://tiktok.com/@bushi.saiteki"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-neutral-800 text-white border border-amber-500/50 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 relative z-10">
        {/* SOBRE NOSOTROS */}
        <section className="bg-neutral-950/80 border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden backdrop-blur-md">
          <p className="text-amber-500 font-serif text-lg tracking-widest mb-1">
            武士 最適
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-6">
            Sobre Nosotros: La Filosofía Bushi Saiteki
          </h2>
          
          <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
            <p>
              En el Japón feudal, un <strong className="text-white font-semibold">Bushi (武士)</strong> o guerrero samurái buscaba incansablemente la perfección, la disciplina y el honor en cada movimiento. Para nosotros, <strong className="text-white font-semibold">Saiteki (最適)</strong> representa el estado óptimo: el equilibrio perfecto y la máxima excelencia alcanzable.
            </p>
            <p>
              Al fusionar ambos conceptos creamos el camino del <em>Guerrero Óptimo de la Cocina</em>. Llevamos la rigurosa disciplina del samurái a nuestra barra de sushi y fogones. Cada corte de pescado fresco, la precisión exacta en la temperatura del arroz y la armonía visual de nuestros platos son un tributo a la maestría artesanal japonesa.
            </p>
          </div>
        </section>

        {/* MENÚ DIGITAL TITLE */}
        <header className="text-center pt-4 border-b border-amber-500/20 pb-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-amber-500 uppercase font-serif">
            MENÚ DIGITAL
          </h2>
        </header>

        {/* SECCIONES DEL MENÚ */}
        <SectionBlock title="APERITIVOS Y ESPECIALIDADES" items={menuData.aperitivos} getWhatsAppLink={getWhatsAppLink} />
        <SectionBlock title="ROLLS ESPECIALES" items={menuData.rollsEspeciales} getWhatsAppLink={getWhatsAppLink} />
        <SectionBlock title="HOT ROLLS & TEMPURA" items={menuData.hotRolls} getWhatsAppLink={getWhatsAppLink} />
        <SectionBlock title="ROLLS CLÁSICOS & VEGGIE" items={menuData.clasicosYVeggie} getWhatsAppLink={getWhatsAppLink} />
        <SectionBlock title="ENSALADAS & SASHIMIS" items={menuData.ensaladasYSashimis} getWhatsAppLink={getWhatsAppLink} />

        {/* HAZ TU PEDIDO DIRECTO - CARD FINAL */}
        <section className="bg-neutral-950/80 border border-amber-500/30 rounded-2xl p-8 text-center shadow-2xl max-w-3xl mx-auto backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500 mb-2 font-serif">
            ¡Haz Tu Pedido Directo!
          </h3>
          <p className="text-neutral-300 text-sm mb-6">
            Atención rápida por WhatsApp o llamadas telefónicas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Línea Principal */}
            <div className="bg-black/60 border border-neutral-800 rounded-xl p-4 flex flex-col items-center">
              <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-1">
                LÍNEA PRINCIPAL
              </span>
              <a href="tel:04142044493" className="text-amber-400 font-bold text-lg hover:underline mb-2 flex items-center gap-2">
                📞 0414-2044493
              </a>
              <a
                href="https://wa.me/584142044493"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 text-xs font-semibold hover:underline flex items-center gap-1"
              >
                💬 Abrir WhatsApp
              </a>
            </div>

            {/* Línea Secundaria */}
            <div className="bg-black/60 border border-neutral-800 rounded-xl p-4 flex flex-col items-center">
              <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-1">
                LÍNEA SECUNDARIA
              </span>
              <a href="tel:04242882861" className="text-amber-400 font-bold text-lg hover:underline mb-2 flex items-center gap-2">
                📞 0424-2882861
              </a>
              <a
                href="https://wa.me/584242882861"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 text-xs font-semibold hover:underline flex items-center gap-1"
              >
                💬 Abrir WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6">
            <p className="text-xs text-neutral-400 mb-3 uppercase tracking-wider">
              Síguenos en nuestras redes
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <a
                href="https://instagram.com/bushisaiteki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1 font-medium"
              >
                📷 @bushisaiteki (Instagram)
              </a>
              <a
                href="https://tiktok.com/@bushi.saiteki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-medium"
              >
                🎵 @bushi.saiteki (TikTok)
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionBlock({ title, items, getWhatsAppLink }) {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-amber-500 border-l-4 border-amber-500 pl-3 mb-6 uppercase tracking-wide font-serif">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-neutral-950/85 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between shadow-lg hover:border-amber-500/40 transition-all backdrop-blur-sm"
          >
            <div>
              <div className="relative w-full h-64 bg-neutral-900 overflow-hidden">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-white mb-2">{item.nombre}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{item.descripcion}</p>
              </div>
            </div>

            <div className="p-5 pt-0 flex justify-between items-center mt-auto border-t border-neutral-800/60">
              <span className="text-emerald-400 font-extrabold text-xl">{item.precio}</span>
              <a
                href={getWhatsAppLink(item.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-600/60 text-xs font-semibold px-3 py-2 rounded-lg transition-all flex items-center gap-1.5"
              >
                Pedir este plato
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
'use client';
import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const appetizers = [
    {
      name: "Saiteki Ocean",
      desc: "Fresca ensalada de wakame y cangrejo desmenuzado, bañada en ponzu y spicy mayo. Coronada con cortes de salmón al grill y sashimi de atún sellado.",
      price: "$6.00",
      image: "/images/saiteki-ocean.jpg"
    },
    {
      name: "Tekebuchi Saiteki",
      desc: "Crujientes bocados de mozzarella rellenos con nuestra exclusiva mezcla gratinada de camarones y especias de inspiración japonesa. Dorados a la perfección y acompañados con salsa Fuji y salsa de anguila.",
      price: "$6.00",
      image: "/images/tekebuchi-saiteki.jpg"
    },
    {
      name: "Sashimi de Salmón",
      desc: "Cuatro piezas de salmón fresco cuidadosamente seleccionadas, cortadas al estilo tradicional japonés para resaltar su textura suave y su delicado sabor.",
      price: "$6.00",
      image: "/images/sashimi-salmon.jpg"
    },
    {
      name: "Sashimi de Atún",
      desc: "Cuatro piezas de atún fresco cuidadosamente seleccionadas, cortadas al estilo tradicional japonés para disfrutar su sabor limpio y delicado.",
      price: "$6.00",
      image: "/images/sashimi-atun.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white p-6 md:p-12 font-sans">
      {/* Botón de Menú Completo */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#1a1d24] border border-amber-500/50 hover:border-amber-400 text-amber-300 font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 flex items-center gap-2 cursor-pointer"
        >
          📜 Ver Menú Completo (Imágenes Full HD)
        </button>
      </div>

      {/* Sección Aperitivos */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-amber-500 text-xl font-bold tracking-wider mb-8 border-l-4 border-amber-500 pl-3">
          APERITIVOS (APPETIZERS)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {appetizers.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#14171f] border border-gray-800 rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:border-gray-700 transition"
            >
              {/* Contenedor de Imagen Forzado a Cubrir Todo */}
              <div className="w-full h-48 bg-black relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Información del plato */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/60">
                  <span className="text-emerald-400 font-bold text-lg">{item.price}</span>
                  <button className="bg-emerald-950/60 hover:bg-emerald-900 text-emerald-400 border border-emerald-800/50 text-xs font-semibold px-3 py-2 rounded-lg transition cursor-pointer">
                    Pedir este plato
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Menú Completo */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#14171f] border border-gray-700 rounded-2xl max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-amber-400 mb-4">Menú Completo Full HD</h3>
            <div className="text-gray-300 text-sm space-y-3">
              <p>Aquí puedes integrar las imágenes o el visor del menú completo en alta definición.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
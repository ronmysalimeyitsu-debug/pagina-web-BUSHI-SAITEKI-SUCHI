'use client';

const menuData = {
  aperitivos: [
    {
      id: "bushi-crispy-pizza",
      nombre: "Bushi Crispy Pizza",
      descripcion: "Base crocante de arroz de sushi cubierta con nuestra mezcla especial de pescados, quesos y especias japonesas, gratinada al horno.",
      precio: "$11.00",
      imagen: "/images/bushi-crispy-pizza.jpg"
    },
    {
      id: "tekebuchi-saiteki",
      nombre: "Tekebuchi Saiteki",
      descripcion: "Crujientes bocados de mozzarella rellenos con nuestra exclusiva mezcla gratinada de camarones, dorados a la perfección y acompañados con salsa Fuji y salsa de anguila.",
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
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header / Historia */}
      <section className="max-w-5xl mx-auto text-center mb-12 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800">
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
          En el Japón feudal, un <strong className="text-amber-500">Bushi (武士)</strong> o guerrero samurái buscaba incansablemente la perfección, la disciplina y el honor en cada movimiento. Para nosotros, <strong className="text-amber-500">Saiteki (最適)</strong> representa el estado óptimo: el equilibrio perfecto y la máxima excelencia alcanzable.
        </p>
        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Al fusionar ambos conceptos creamos el camino del <em>Guerrero Óptimo de la Cocina</em>. Llevamos la rigurosa disciplina del samurái a nuestra barra de sushi y fogones. Cada corte de pescado fresco, la precisión exacta en la temperatura del arroz y la armonía visual de nuestros platos son un tributo a la maestría artesanal japonesa.
        </p>
      </section>

      {/* Menú Digital Title */}
      <header className="max-w-6xl mx-auto text-center mb-10 border-b border-neutral-800 pb-4">
        <h1 className="text-3xl sm:text-5xl font-black tracking-wider text-amber-500 uppercase">
          MENÚ DIGITAL
        </h1>
      </header>

      <div className="max-w-6xl mx-auto space-y-12">
        <SectionBlock title="APERITIVOS Y ESPECIALIDADES" items={menuData.aperitivos} />
        <SectionBlock title="ROLLS ESPECIALES" items={menuData.rollsEspeciales} />
        <SectionBlock title="HOT ROLLS & TEMPURA" items={menuData.hotRolls} />
        <SectionBlock title="ROLLS CLÁSICOS & VEGGIE" items={menuData.clasicosYVeggie} />
        <SectionBlock title="ENSALADAS & SASHIMIS" items={menuData.ensaladasYSashimis} />
      </div>
    </main>
  );
}

function SectionBlock({ title, items }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-amber-500 border-l-4 border-amber-500 pl-3 mb-6 uppercase tracking-wide">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between shadow-lg hover:border-amber-500/40 transition-all"
          >
            <div>
              <div className="relative w-full h-64 bg-neutral-800">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.nombre}</h3>
                  <span className="text-amber-400 font-extrabold text-lg">{item.precio}</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.descripcion}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
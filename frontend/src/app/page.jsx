'use client';

import { useState } from 'react';
import Image from 'next/image';
import { menuItems } from '@/data/menu';

export default function MenuBushi() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const categorias = ['Todos', ...new Set(menuItems.map(item => item.categoria))];

  const itemsFiltrados = categoriaActiva === 'Todos'
    ? menuItems
    : menuItems.filter(item => item.categoria === categoriaActiva);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-6xl font-black tracking-wider text-amber-500 uppercase mb-2">
          BUSHI SAITEKI
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg">Sushi & Japanese Fusion Menu</p>
      </header>

      {/* Filtros por Categoria */}
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              categoriaActiva === cat
                ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Grid del Menú */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsFiltrados.map((item) => (
          <article 
            key={item.id}
            className="bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Imagen del plato */}
              <div className="relative w-full h-60 bg-neutral-800">
                <Image
                  src={item.img}
                  alt={item.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 right-3 bg-neutral-950/85 backdrop-blur-md text-amber-400 font-bold px-3 py-1 rounded-full text-xs border border-amber-500/30">
                  {item.piezas} {item.piezas === 1 ? 'Porción' : 'Piezas'}
                </span>
              </div>

              {/* Detalle */}
              <div className="p-5">
                <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
                  {item.categoria}
                </span>
                <h2 className="text-2xl font-bold mt-1 mb-2 text-white">
                  {item.nombre}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {item.descripcion}
                </p>
              </div>
            </div>

            {/* Precio y Acción */}
            <div className="p-5 pt-0 flex items-center justify-between mt-auto">
              <div>
                <span className="text-xs text-neutral-500 block">Precio</span>
                <span className="text-2xl font-black text-amber-400">
                  ${item.precio.toFixed(2)}
                </span>
              </div>
              <button className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-md">
                Pedir
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
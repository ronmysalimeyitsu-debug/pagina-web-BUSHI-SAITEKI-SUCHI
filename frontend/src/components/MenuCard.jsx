import React from 'react'

export default function MenuCard({ item }) {
  return (
    <article className="border rounded-lg p-4 shadow-sm max-w-sm flex flex-col">
      {item.img && (
        <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-3" />
      )}
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.desc}</p>
      <div className="mt-2 font-medium">${item.price}</div>
    </article>
  )
}

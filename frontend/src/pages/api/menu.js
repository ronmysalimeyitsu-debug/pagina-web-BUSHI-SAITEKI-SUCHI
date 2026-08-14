// Serve menu directly from Next API to avoid external backend dependency in production.
const MENU = [
  { id: 1, name: 'Sushi Rolls', price: 12.5, desc: 'Rolls variados', img: '/menu/item1.png' },
  { id: 2, name: 'Nigiri', price: 9.0, desc: 'Pescado sobre arroz', img: '/menu/item2.png' },
  { id: 3, name: 'Sashimi', price: 14.0, desc: 'Pescado en láminas', img: '/menu/item3.png' }
]

export default function handler(req, res) {
  res.status(200).json(MENU)
}

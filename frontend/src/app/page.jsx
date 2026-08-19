export default function Home() {
  return (
    <div>
      {/* Pega tu nuevo header justo aquí */}
      <header style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        padding: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px' 
      }}>
        <img 
          src="/images/logo-bushi.jpg" 
          alt="Bushi Saiteki Logo" 
          style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
        />
        <div>
          <h1 style={{ margin: 0 }}>Bushi Saiteki Suchi</h1>
          <p style={{ margin: 0 }}>Bienvenidos a nuestra maqueta.</p>
        </div>
      </header>

      {/* El resto de tu menú y componentes continúan abajo */}
    </div>
  )
}
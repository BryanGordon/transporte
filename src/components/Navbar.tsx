import '../Navbar.css'

export function Navbar () {
  return (
    <nav>
      <ul className='nav-item-container'>
        <li className='nav-items'>
          <a href='#home'>
            Home
          </a>
        </li>
        <li className='nav-items'>
          <a href='#servicios'>
            Servicios
          </a>
        </li>
        <li className='nav-items'>
          <a href='#contactos'>
            Contactos
          </a>
        </li>
        <li className='nav-items'>
          <a href='#ubicacion'>
            Ubicación
          </a>
        </li>
      </ul>
    </nav>
  )
}

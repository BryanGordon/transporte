import '../Navbar.css'

export function Navbar () {
  return (
    <nav>
      <ul className='nav-item-container'>
        <li className='nav-items'>
          Home
        </li>
        <li className='nav-items'>
          Servicios
        </li>
        <li className='nav-items'>
          Contactos
        </li>
        <li className='nav-items'>
          Ubicación
        </li>
      </ul>
    </nav>
  )
}

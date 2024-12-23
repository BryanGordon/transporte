import '../Navbar.css'
import { useStore } from '@/store/useStore'

export function Navbar () {
  const { setChangeClick } = useStore()

  return (
    <nav>

      <ul className='nav-item-container'>

        <li className='nav-items'>
          <a href='#home' onClick={() => setChangeClick()}>
            Home
          </a>
        </li>

        <li className='nav-items'>
          <a href='#servicios' onClick={() => setChangeClick()}>
            Servicios
          </a>
        </li>

        <li className='nav-items'>
          <a href='#contactos' onClick={() => setChangeClick()}>
            Contactos
          </a>
        </li>

        <li className='nav-items'>
          <a href='#ubicacion' onClick={() => setChangeClick()}>
            Ubicación
          </a>
        </li>

      </ul>

    </nav>
  )
}

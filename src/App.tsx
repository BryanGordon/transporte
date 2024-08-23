import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'
import { Ubicacion } from './components/Ubicacion'

function App () {
  return (
    <main>
      <Header />
      <section>
        <Servicios />
      </section>
      <section>
        <Contacto />
      </section>
      <section>
        <Ubicacion />
      </section>
      <Footer />
    </main>
  )
}

export default App

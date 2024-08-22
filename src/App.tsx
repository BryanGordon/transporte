import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'

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
      <Footer />
    </main>
  )
}

export default App

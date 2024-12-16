import { motion } from 'motion/react'

import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'
import { Ubicacion } from './components/Ubicacion'

/**
 * Arreglar estructura del proyecto
 * Acabar de colocar las animaciones en la seccion de direccion y
 * analizar si colocar en la seccion de servicios.
 */

function App () {
  return (
    <main>

      <Header />
      <section>
        <Servicios />
      </section>
      <section>
        <motion.div
          whileInView={{ y: 50 }}
          viewport={{ amount: 0.3 }}
        >
          <Contacto />
        </motion.div>
      </section>

      <section>
        <motion.section
          whileInView={{ y: 50 }}
          viewport={{ amount: 0.3 }}
        >
          <Ubicacion />
        </motion.section>
      </section>
      <Footer />

    </main>
  )
}

export default App

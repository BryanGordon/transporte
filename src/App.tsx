import { motion } from 'motion/react'

import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'
import { Ubicacion } from './components/Ubicacion'
import { useStore } from './store/useStore'

function App () {
  // const tt = useStore((state) => state.clicked)
  const {clicked, setChangeClick} = useStore()
  const prueba = {
    y: {
      duration: 0.5,
      repeat: 0,
      type: 'orchestation'
    }
  }

  return (
    <main>
      <Header />
      <section>
        <Servicios />
      </section>
      <section>
        {
        clicked ?
          <motion.div
            transition={prueba}
            animate={{
              y: ['0%', '5%', '0%']
            }}
          >
            <Contacto />
          </motion.div>
        :
          <Contacto />
        }
      </section>

      <section>
        <motion.section>
          <Ubicacion />
        </motion.section>
      </section>
      <Footer />

    </main>
  )
}

export default App

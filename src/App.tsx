import { motion } from 'motion/react'

import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'
import { Ubicacion } from './components/Ubicacion'
import { useStore } from './store/useStore'

function App () {
  const clicked = useStore((state) => state.clicked)

  const animation = {
    y: {
      duration: 0.6,
      repeat: 0,
      type: 'orchestation'
    }
  }

  return (
    <main>
      <Header />
      <section>
        {
          clicked
            ? <motion.div
                transition={animation}
                animate={{
                  y: ['0', '5%', '0%']
                }}
              >
                <Servicios />
              </motion.div>
            : <Servicios />
        }
      </section>

      <section>
        {
        clicked
          ? <motion.div
              transition={animation}
              animate={{
                y: ['0%', '5%', '0%']
              }}
            >
              <Contacto />
            </motion.div>
          : <Contacto />
        }
      </section>

      <section>
        {
          clicked
            ? <motion.div
                transition={animation}
                animate={{
                  y: ['0%', '5%', '0%']
                }}
              >
                <Ubicacion />
              </motion.div>
            : <Ubicacion />
        }
      </section>
      <Footer />

    </main>
  )
}

export default App

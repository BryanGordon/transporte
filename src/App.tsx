import { motion } from 'motion/react'

import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'
import { Ubicacion } from './components/Ubicacion'

function App () {
  const animation = {
    y: {
      duration: 0.5,
      repeat: 0,
      type: 'orchestation'
    }
  }
  return (
    <main>
      <Header />
      <motion.section 
        transition={animation}
        whileInView={{ 
          y:['0%', '4%', '0%']
        }}
        viewport={{once: true}}
      >
        <Servicios />
      </motion.section>

      <motion.section 
        transition={animation}
        whileInView={{ 
          y:['0%', '4%', '0%']
        }}
        viewport={{once: true}}
      >
        <Contacto />
      </motion.section>

      <motion.section
      transition={animation}
      whileInView={{
        y: ['0%', '4%', '0%']
      }}
      viewport={{once: true}}
      >
        <Ubicacion />
      </motion.section>
      <Footer />

    </main>
  )
}

export default App

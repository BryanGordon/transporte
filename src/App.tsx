import { motion } from 'motion/react'

import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Servicios } from './components/Servicios'
import { Ubicacion } from './components/Ubicacion'

function App () {
  const firstAnimation = {
    y: {
      duration: 0.7,
      repeat: 0,
      delay: 0,
      type: 'orchestation'
    }
  }

  const lastAnimation = {
    y: {
      duration: 0.7, 
      repeat: 0,
      delay: 0.5,
      type: 'orchestation'
    }
  }

  return (
    <main>
      <Header />
      <motion.section 
        transition={firstAnimation}
        whileInView={{ 
          y:['0%', '4%', '0%']
        }}
        viewport={{once: true}}
      >
        <Servicios />
      </motion.section>

      <motion.section 
        transition={lastAnimation}
        whileInView={{ 
          y:['0%', '4%', '0%']
        }}
        viewport={{once: true}}
      >
        <Contacto />
      </motion.section>

      <motion.section
      transition={lastAnimation}
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

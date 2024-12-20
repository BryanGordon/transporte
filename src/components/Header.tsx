import { useStore } from '@/store/useStore'
import { ImgHeader } from './ImgHeader'
import { Navbar } from './Navbar'

export function Header () {
  const value = useStore((state) => state.clicked)
  console.log('Header state  ' + value)
  return (
    <header id='home'>
      <ImgHeader />
      <Navbar />
    </header>
  )
}

import '../ImgStyles.css'
import Backgroundheader from '../assets/banner-1.jpg'

export function ImgHeader () {
  return (
    <>
      <span>TRANSPORTES</span>
      <img className='img-header' src={Backgroundheader} alt='transport-img' />
    </>
  )
}

import '../ImgStyles.css'
import Backgroundheader from '../assets/banner-1.jpg'

export function ImgHeader () {
  return (
    <>
      <div className='header-title'>
        <span className='title-text'>EMPRESA DE TRANSPORTES</span>
      </div>
      <img className='img-header' src={Backgroundheader} alt='transport-img' />
    </>
  )
}

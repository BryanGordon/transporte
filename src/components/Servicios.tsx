import '../Servicios.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Img from '../assets/banner-5.jpg'

export function Servicios () {
  return (
    <article>
      <h1>Ofertamos diferentes tipos de servicios</h1>
      <div className='container-carousel'>
        {/*
        <Carousel>
          <CarouselContent>
            <CarouselItem>Algo</CarouselItem>
            <CarouselItem>Algo</CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
        */}
      </div>

      <div className='data-container'>
        <div className='mb-10'>
          <h2>Servicios de transporte de mercancias</h2>
          <div className='data'>
            <img className='data-img' src={Img} alt='imagen-1' />
            <p className='img-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae provident sed rerum porro placeat numquam iusto. Itaque deleniti
              saepe quo assumenda ea perferendis adipisci quibusdam aperiam quas, rerum
              odit recusandae.
            </p>
          </div>
        </div>

        <div className='mb-10'>
          <h2>Servicios de logistica</h2>
          <div className='data'>
            <p className='img-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit
              velit excepturi laborum, laudantium amet adipisci mollitia numquam, iusto illum
              debitis inventore necessitatibus minima qui, doloremque unde dolorem eius illo?
            </p>
            <img className='data-img' src={Img} alt='imagen-2' />
          </div>
        </div>

        <div className='mb-10'>
          <h2>Servicios de carga pesada</h2>
          <div className='data'>
            <img className='data-img' src={Img} alt='imagen-3' />
            <p className='img-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              ipsam ea! Quisquam officiis quidem fuga necessitatibus. Eveniet officia,
              architecto sit minus ab velit, vel optio sequi consequuntur ratione nesciunt vero?
            </p>
          </div>
        </div>

      </div>

    </article>
  )
}

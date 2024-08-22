import '../Servicios.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

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
        <div>
          <h2>Servicios de transporte de mercancias</h2>
          <div className='data'>
            <img src='' alt='imagen-1' />
            <p className='img-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, molestias.</p>
          </div>
        </div>

        <div>
          <h2>Servicios de logistica</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, dolores?</p>
          <img src='' alt='imagen-2' />
        </div>

        <div>
          <h2>Servicios de carga pesada</h2>
          <img src='' alt='imagen-3' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, sed?</p>
        </div>

      </div>

    </article>
  )
}

import '../Servicios.css'
import Img1 from '../assets/transportes-1.jpg'
import Img2 from '../assets/transporte-2.jpg'
import Img3 from '../assets/transporte-4.jpg'

export function Servicios () {
  return (
    <article id='servicios'>

      <h1>Ofertamos diferentes tipos de servicios</h1>

      <div className='data-container'>

        <div className='mb-10'>
          <h2>Servicios de transporte de mercancias</h2>

          <div className='data'>
            <img className='data-img' src={Img1} alt='imagen-1' />
            <p className='data-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae provident sed rerum porro placeat numquam iusto. Itaque deleniti
              saepe quo assumenda ea perferendis adipisci quibusdam aperiam quas, rerum
              odit recusandae.
            </p>
          </div>

        </div>

        <div className='mb-10'>
          <h2>Servicios de logistica</h2>

          <div className='data'>
            <p className='data-text-re'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit
              velit excepturi laborum, laudantium amet adipisci mollitia numquam, iusto illum
              debitis inventore necessitatibus minima qui, doloremque unde dolorem eius illo?
            </p>
            <img className='data-img' src={Img2} alt='imagen-2' />
          </div>

        </div>

        <div className='mb-10'>
          <h2>Servicios de carga pesada</h2>

          <div className='data'>
            <img className='data-img' src={Img3} alt='imagen-3' />
            <p className='data-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              ipsam ea! Quisquam officiis quidem fuga necessitatibus. Eveniet officia,
              architecto sit minus ab velit, vel optio sequi consequuntur ratione nesciunt vero?
            </p>
          </div>

        </div>

      </div>

    </article>
  )
}

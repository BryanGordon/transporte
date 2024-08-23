import '../Contacto.css'
import Img from '../assets/transportes-1.jpg'

export function Contacto () {
  return (
    <article>
      <h1>Contactos</h1>
      <h2>Sede principal</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore fugiat
        illo facere ipsam ntusa. Cupiditate nobis quam nostrum ea alias asperiores aspernatur,
        deserunt iusto voluptate consequuntur placeat nemo recusandae accusantium,
        eligendi rerum, iste in. Distinctio magnam labore voluptates voluptatem!
      </p>
      <div className='img-container'>
        <img className='min-w-[450px] min-h-[250px]' src={Img} alt='img-store' />
      </div>

      <h2>Nuestras redes sociales</h2>
    </article>
  )
}

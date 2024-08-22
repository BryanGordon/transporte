import '../Footer.css'

export function Footer () {
  return (
    <footer>
      <div>
        <span className='text-slate-800 ml-5 mt-4 p-0'>Derechos reservados</span>
      </div>

      <div className='icons-container'>
        <a target='_blank' rel='noreferrer' href='https://www.google.com'>
          <i>icon 1</i>
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.google.com'>
          <i>icon 2</i>
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.google.com'>
          <i>icon 3</i>
        </a>
      </div>

    </footer>
  )
}

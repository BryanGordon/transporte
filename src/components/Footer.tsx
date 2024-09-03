import '../Footer.css'
import { WhatsappIcon } from '@/icons/WhatsappIcon'
import { InstagramIcon } from '@/icons/InstagramIcon'
import { FacebookIcon } from '@/icons/FacebookIcon'

export function Footer () {
  return (
    <footer>

      <div className='content-center'>
        <span className='text-slate-800 ml-10 p-0'>Derechos reservados</span>
      </div>

      <div className='icons-container'>
        <a target='_blank' rel='noreferrer' href='https://www.google.com'>
          <WhatsappIcon width={24} height={24} strokeWidth={1.5} />
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.google.com'>
          <InstagramIcon width={24} height={24} strokeWidth={1.4} />
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.google.com'>
          <FacebookIcon width={24} height={24} strokeWidth={1} />
        </a>
      </div>

    </footer>
  )
}

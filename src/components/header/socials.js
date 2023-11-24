import Fade from 'react-reveal/Fade'

// Assets
import {
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  LinkedinIcon,
} from '../../icons/index'

const Socials = ({ open }) => {
  return (
    <Fade bottom cascade>
      <div
        className={`${
          open ? 'flex' : 'hidden'
        } items-center justify-center lg:hidden py-3`}
      >
        <a
          href='https://www.instagram.com/marioromanoca/'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <InstagramIcon
            size='h-8 w-8 text-white-100'
            classes='transition duration-200 ease-in-out transform hover:-translate-y-0.5'
          />
        </a>
        <a
          href='https://www.facebook.com/MarioRomanoca/'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <FacebookIcon
            size='h-8 w-8 text-white-100'
            classes='transition duration-200 ease-in-out transform hover:-translate-y-0.5'
          />
        </a>
        <a
          href='https://www.linkedin.com/company/m-r-walls'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <LinkedinIcon
            size='h-8 w-8 text-white-100'
            classes='transition duration-200 ease-in-out transform hover:-translate-y-0.5'
          />
        </a>
        <a
          href='https://www.pinterest.com/marioromanoca/_created/'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <PinterestIcon
            size='h-8 w-8 text-white-100'
            classes='transition duration-200 ease-in-out transform hover:-translate-y-0.5'
          />
        </a>
      </div>
    </Fade>
  )
}

export default Socials

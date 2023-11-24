// Assets
import {
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  LinkedinIcon,
} from '../../icons/index'

const Socials = () => {
  return (
    <div className='flex items-center justify-center py-3 order-1 sm:order-2'>
      <a
        href='https://www.instagram.com/marioromanoca/'
        target='_blank'
        rel='noreferrer'
        className='p-2'
      >
        <InstagramIcon
          size='w-6 h-6'
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
          size='w-6 h-6'
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
          size='w-6 h-6'
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
          size='w-6 h-6'
          classes='transition duration-200 ease-in-out transform hover:-translate-y-0.5'
        />
      </a>
    </div>
  )
}

export default Socials

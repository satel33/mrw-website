import Fade from 'react-reveal/Fade'
import Link from 'next/link'

// Components
import SocialShare from '../../components/socialShare/index'

const Overlay = ({ title, slug, showShare }) => {
  return (
    <>
      <div className='hidden sm:flex items-center justify-between gap-1 bg-black bg-opacity-70 absolute bottom-0 w-full px-3 py-2 transform transition duration-200 translate-y-14 group-hover:translate-y-0'>
        <Link href={slug ?? '/'}>
          <a className='text-white-100 truncate'>{title ?? ''}</a>
        </Link>
        {showShare && <SocialShare shareUrl={slug ?? '/'} />}
      </div>

      <Fade bottom>
        <div className='flex items-center justify-between gap-1 bg-black bg-opacity-70 absolute bottom-0 w-full px-3 py-2 sm:hidden'>
          <Link href={slug ?? '/'}>
            <a className='text-white-100 truncate'>{title ?? ''}</a>
          </Link>
          {showShare && <SocialShare shareUrl={slug ?? '/'} />}
        </div>
      </Fade>
    </>
  )
}

export default Overlay

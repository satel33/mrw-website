import Link from 'next/link'

// Assets
import LogoIcon from '../../../public/mrw-logo.svg'

const Logo = () => {
  return (
    <Link href='/' prefetch={false}>
      <a className='py-2' aria-label='M|R Walls'>
        <LogoIcon width={{ maxWidth: '100%' }} />
      </a>
    </Link>
  )
}

export default Logo

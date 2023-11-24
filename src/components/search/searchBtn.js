import Link from 'next/link'
import Fade from 'react-reveal/Fade'
// Hooks
import useMenuScroll from '../../hooks/useMenuScroll'

const SearchBtn = () => {
  const opacity = useMenuScroll()

  return (
    <Fade left cascade>
      <div className={`items-center justify-center flex mt-3 md:mt-0`}>
        <span>
          <Link href='/designs' prefetch={false}>
            <a
              style={{ fontSize: 22 }}
              className='py-3 block font-light text-black border transition duration-200 ease-in-out px-6 border-black-100 mt-6 hover:bg-black-100 hover:text-white'
            >
              Browse Designs
            </a>
          </Link>
        </span>
      </div>
    </Fade>
  )
}

export default SearchBtn

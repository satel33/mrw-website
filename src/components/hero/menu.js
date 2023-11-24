import Link from 'next/link'
import Fade from 'react-reveal/Fade'
// Context
import { useContactModal } from '../../context/contactModalContext'
// Hooks
import usePageOffset from '../../hooks/usePageOffset'
// Components
import SearchBtn from '../search/searchBtn'

const Menu = () => {
  const { toggleModal } = useContactModal()
  const { showMenu } = usePageOffset()

  return (
    <div
      className={`${
        showMenu ? 'fixed' : 'hidden'
      } top-0 left-0 flex items-center justify-center w-full h-full`}
    >
      <Fade left cascade>
        <div className='flex items-center justify-center flex-col lg:flex-row flex-wrap'>
          <div className='py-3 md:p-6'>
            <Link href='/projects' prefetch={false}>
              <a className='text-4xl text-black  2xl:text-5xl font-light border-b-2 border-transparent transition duration-500 ease-in-out hover:border-black'>
                Projects
              </a>
            </Link>
          </div>
          <div className='py-3 md:p-6'>
            <Link href='/specialties' prefetch={false}>
              <a className='text-4xl text-black 2xl:text-5xl font-light border-b-2 border-transparent transition duration-500 ease-in-out hover:border-black'>
                Specialties
              </a>
            </Link>
          </div>
          <div className='py-3 md:p-6'>
            <Link href='/applications' prefetch={false}>
              <a className='text-4xl text-black 2xl:text-5xl font-light border-b-2 border-transparent transition duration-500 ease-in-out hover:border-black'>
                Applications
              </a>
            </Link>
          </div>
          <div className='py-3 md:p-6'>
            <Link href='/how-it-works' prefetch={false}>
              <a className='text-4xl text-black 2xl:text-5xl  font-light border-b-2 border-transparent transition duration-500 ease-in-out hover:border-black'>
                How it Works
              </a>
            </Link>
          </div>
          <div className='py-3 md:p-6'>
            <button
              onClick={() => toggleModal(true)}
              className='text-4xl text-black 2xl:text-5xl font-light border-b-2 border-transparent transition duration-500 ease-in-out hover:border-black'
            >
              Contact
            </button>
          </div>
          <Fade>
            <div className='w-full -mt-6 flex items-center justify-center'>
              <SearchBtn />
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  )
}

export default Menu

// Context
import { useContactModal } from '../../context/contactModalContext'

const CallToActionBlock = () => {
  const { toggleModal } = useContactModal()

  return (
    <section className='bg- relative max-w-screen-sm px-4 mx-auto py-8 sm:py-12 grid grid-cols-1 md:grid-cols-1 gap-x-7 gap-y-7 items-start'>
      <button
        onClick={() => toggleModal(true)}
        className='transparent px-6 py-3 border-2  font-medium transition duration-200 block max-w-max mx-auto my-4 shadow-xl hover:opacity-90 border-bluish-100 text-bluish-100 hover:bg-bluish-100 hover:text-white'
      >
        Contact Us to Get Started
      </button>
    </section>
  )
}

export default CallToActionBlock

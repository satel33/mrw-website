// Assets
import { MenuIcon, CloseIcon } from '../../icons/index'

const MenuButton = ({ toggleOpen, open }) => (
  <button
    aria-label='Menu button'
    className='flex items-center justify-center bg-transparent p-2 lg:hidden'
    onClick={() => toggleOpen(!open)}
  >
    {open ? (
      <CloseIcon size='h-8 w-8 text-white-100' />
    ) : (
      <MenuIcon size='h-8 w-8 text-white-100' />
    )}
  </button>
)

export default MenuButton

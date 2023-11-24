// Assets
import { CloseIcon } from '../../icons/index'

const CloseBtn = ({ toggleModal }) => {
  return (
    <button
      onClick={() => toggleModal(false)}
      className='flex items-center justify-center bg-gray-100 p-2 rounded-full transition duration-200 hover:bg-gray-200 place-self-end'
    >
      <CloseIcon />
    </button>
  )
}

export default CloseBtn

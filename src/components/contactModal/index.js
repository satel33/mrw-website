import Modal from 'react-modal'

// Context
import { useContactModal } from '../../context/contactModalContext'
// Components
import Form from './form'
import Header from './header'
import CloseBtn from './closeBtn'

const customStyles = {
  overlay: {
    zIndex: 1000,
    background: 'rgba(0,0,0, 0.5)',
  },
  content: {
    border: 'none',
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: 0,
    maxWidth: 448,
    width: '100%',
    marginLeft: 'auto',
    padding: 16,
  },
}

Modal.setAppElement('#__next')

const ContactModal = () => {
  const { modal, toggleModal } = useContactModal()

  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => toggleModal(false)}
      style={customStyles}
    >
      <div className='grid grid-cols-1 gap-4'>
        <CloseBtn toggleModal={toggleModal} />
        <Header />
        <Form />
      </div>
    </Modal>
  )
}

export default ContactModal

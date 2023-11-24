import { useContext, useState, createContext } from 'react'

const ContactModalContext = createContext()

export const ContactModalContextProvider = ({ children }) => {
  const [modal, toggleModal] = useState(false)

  return (
    <ContactModalContext.Provider
      value={{
        modal,
        toggleModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  )
}

export const useContactModal = () => {
  const context = useContext(ContactModalContext)
  if (context === undefined) {
    throw new Error(
      'useContactModal must be used within an ContactModalContextProvider'
    )
  }

  return context
}

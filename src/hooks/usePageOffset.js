import { useState, useEffect } from 'react'

const usePageOffset = (location) => {
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 1200) {
        setShowMenu(false)
      } else {
        setShowMenu(true)
      }
    })
  }, [])

  return {
    showMenu,
  }
}

export default usePageOffset

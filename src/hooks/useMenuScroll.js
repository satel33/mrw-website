import { useState, useEffect } from 'react'

const useMenuScroll = () => {
  const [opacity, setOpacity] = useState('sm:fade-out')

  useEffect(() => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset
      let fullScreen = window.innerHeight - 400

      if (currentScrollPos >= fullScreen) {
        setOpacity('sm:fade-in')
      } else {
        setOpacity('sm:fade-out')
      }
    }
  }, [])

  return opacity
}

export default useMenuScroll

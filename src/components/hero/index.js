import dynamic from 'next/dynamic'
import { use100vh } from 'react-div-100vh'

// Components
const Menu = dynamic(() => import('./menu'))
const Video = dynamic(() => import('./video.js'), { ssr: false })

const Hero = () => {
  const height = use100vh()

  return (
    // <div style={{ height: height ? height - 64 : '100vh' }}>
    //   <Menu />
    //   <Video />
    // </div>
    <div className='px-4 bg-red-200'>
      <p>Heroo here...</p>
    </div>
  )
}
export default Hero

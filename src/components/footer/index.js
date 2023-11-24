// Components
import Menu from './menu'
import Copyrights from './copyrights'

const Footer = ({ pages }) => {
  return (
    <footer className='bg-white relative border-t'>
      <Menu pages={pages} />
      <Copyrights />
    </footer>
  )
}

export default Footer

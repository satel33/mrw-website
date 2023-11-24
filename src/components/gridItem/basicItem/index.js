// Components
import Img from './img'

const BasicItem = ({ data }) => {
  return (
    <div className='mx-auto'>
      <Img data={data?.featuredImage || data?.logo} />
    </div>
  )
}

export default BasicItem

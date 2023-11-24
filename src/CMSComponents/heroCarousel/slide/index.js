// Components
import Img from './img'
import Content from './content'

const Slide = ({ slide }) => {
  return (
    <div className='keen-slider__slide h-500 lg:h-648 2xl:h-820'>
      <Img slide={slide} />
      <Content slide={slide} />
    </div>
  )
}

export default Slide

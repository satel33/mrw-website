// Assets
import { ArrowIcon } from '../../icons'

function ArrowLeft(props) {
  // const disabeld = props.disabled
  return (
    <button
      onClick={props.onClick}
      className='h-12 absolute left-2 p-2 m-auto top-0 bottom-0 bg-black text-white border border-gray-700 transition duration-150 ease-in hover:bg-opacity-70'
    >
      <ArrowIcon classes={`transform duration-200 transition -rotate-90`} />
    </button>
  )
}

function ArrowRight(props) {
  // const disabeld = props.disabled
  return (
    <button
      onClick={props.onClick}
      className='h-12 absolute right-2 p-2 m-auto top-0 bottom-0 bg-black text-white border border-gray-700 transition duration-150 ease-in hover:bg-opacity-70'
    >
      <ArrowIcon classes={`transform duration-200 transition rotate-90`} />
    </button>
  )
}

const Navigation = ({ slider, currentSlide }) => {
  return (
    slider && (
      <>
        <ArrowLeft
          onClick={(e) => e.stopPropagation() || slider.prev()}
          disabled={currentSlide === 0}
        />
        <ArrowRight
          onClick={(e) => e.stopPropagation() || slider.next()}
          disabled={currentSlide === slider.details().size - 1}
        />
      </>
    )
  )
}

export default Navigation

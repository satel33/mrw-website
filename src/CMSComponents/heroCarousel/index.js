import { useState, useRef, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

// Components
import Slide from './slide'
import Navigation from './navigation'
import Pagination from './pagination'

const HeroSwiper = ({ data }) => {
  const [pause, setPause] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [control, setControl] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    duration: 2000,
    // spacing: 16,
    mode: 'snap',
    slidesPerView: 1,
    initial: 0,
    loop: true,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <section style={{ zIndex: 11, maxWidth: 1920 }} className={`mx-auto`}>
      <div
        ref={sliderRef}
        className='keen-slider'
        onMouseEnter={() => setControl(true)}
        onMouseLeave={() => setControl(false)}
      >
        {data?.sliders?.map((slide) => {
          return <Slide slide={slide} />
        })}
        {control && <Navigation slider={slider} currentSlide={currentSlide} />}
        <Pagination slider={slider} currentSlide={currentSlide} />
      </div>
    </section>
  )
}

export default HeroSwiper

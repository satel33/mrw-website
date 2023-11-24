import dynamic from 'next/dynamic'
import { useState, useRef, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

// Components
const Slide = dynamic(() => import('./slide.js'))
const Heading = dynamic(() => import('./heading.js'))

const Swiper = ({ data }) => {
  const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    duration: 4000,
    spacing: 16,
    mode: 'free',
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    breakpoints: {
      '(min-width: 550px)': {
        slidesPerView: 2,
        loop: true,
      },
      '(min-width: 1000px)': {
        slidesPerView: data?.slides?.length > 4 ? 4 : data?.slides?.length,
        loop: data?.slides?.length > 4 ? true : false,
      },
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <section className=' mx-auto py-3 px-4' style={{ maxWidth: 1920 }}>
      <Heading data={data} />
      <div className='grid grid-cols-1 gap-4 sm:hidden'>
        {data?.slides?.map((slide, index) => (
          <Slide key={slide?._id} data={slide} />
        ))}
      </div>
      <div className='hidden sm:block'>
        <div ref={sliderRef} className='keen-slider'>
          {data?.slides?.map((slide, index) => (
            <div className='keen-slider__slide'>
              <Slide key={slide?._id} data={slide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Swiper

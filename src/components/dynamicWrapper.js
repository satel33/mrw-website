import { Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

const DynamicWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  return (
    <>
      <Suspense fallback={'loading'}>
        <section ref={ref}>
          {inView ? (
            children
          ) : (
            <div className='h-10 backdrop-blur-md bg-white'></div>
          )}
        </section>
      </Suspense>
    </>
  )
}

export default DynamicWrapper

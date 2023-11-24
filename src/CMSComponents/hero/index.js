import dynamic from 'next/dynamic'
// Components
const CallToAction = dynamic(() => import('../callToAction/index'))

const Hero = ({ data }) => {
  return (
    <section className='bg-white max-w-screen-2xl mx-auto px-4 pt-8 sm:pt-12'>
      <div className='text-center pt-2 pb-6 md:pb-8 mb-4 border-b'>
        <h1
          className={`text-4xl font-light  text-black-100 sm:text-5xl ${
            data?.tagline || data?.hasCallToAction ? 'mb-4' : 'mb-0'
          }`}
        >
          {data?.heading}
        </h1>
        {data?.tagline && (
          <p className='text-base text-black-100 max-w-2xl mx-auto text-center'>
            {data?.tagline}
          </p>
        )}
        {data?.hasCallToAction && <CallToAction data={data?.callToAction} />}
      </div>
    </section>
  )
}

export default Hero

import dynamic from 'next/dynamic'
// Components
const CallToAction = dynamic(() => import('../callToAction/index'))

const BigBlockCallToAction = ({ data }) => {
  return (
    <section
      className='text-white-100 px-4 py-24 text-center'
      style={{ background: data?.blockBackground ?? '#1E1B18' }}
    >
      <p className='text-2xl font-medium'>{data?.blockHeading}</p>
      {data?.blockText && <p className='tex-base mt-3'>{data?.blockText}</p>}
      {data?.blockCta && <CallToAction data={data?.blockCta} />}
    </section>
  )
}

export default BigBlockCallToAction

import Link from 'next/link'

const Hero = ({
  title,
  location,
  year,
  category,
  link,
  application,
  design,
  sector,
}) => {
  return (
    <section className='max-w-2xl mx-auto text-center px-4 py-8'>
      <Link href={link} prefetch={false}>
        <a className='uppercase block mb-2 text-sm text-gray-500 font-medium'>
          {category}
        </a>
      </Link>
      <h1 className='text-black-100 font-light text-3xl sm:text-4xl'>
        {title}
      </h1>
      {!location && !year ? null : (
        <p className='mt-3 text-gray-700 font-medium'>
          {location?.city ?? ''}, {location?.country ?? ''}{' '}
          {year && location && '-'} {year}
        </p>
      )}
      {!design && !application && !sector ? null : (
        <div className='flex items-center justify-center mt-3 gap-2'>
          {design && design?.length ? (
            <Link
              href={{
                pathname: '/designs',
                query: {
                  tag: design[0].name ?? null,
                  type: 'design',
                },
              }}
              prefetch={false}
              as='/designs'
            >
              <a className='text-gray-700 font-medium'>{design[0].name}</a>
            </Link>
          ) : null}
          {design || !application ? '-' : null}
          {application && application?.length ? (
            <Link
              href={{
                pathname: '/designs',
                query: {
                  tag: application[0].name ?? null,
                  type: 'application',
                },
              }}
              prefetch={false}
              as='/designs'
              // href={`/applications/${application[0].name
              //   .toLowerCase()
              //   .replace(' ', '-')}`}
            >
              <a className='text-gray-700 font-medium'>{application[0].name}</a>
            </Link>
          ) : null}
          {sector && application && application.length !== 0 && '-'}
          {sector && sector?.length ? (
            <Link
              href={{
                pathname: '/designs',
                query: {
                  tag: sector[0]?.name ?? null,
                  type: 'sector',
                },
              }}
              prefetch={false}
              as='/designs'
            >
              <a className='text-gray-700 font-medium'>{sector[0].name}</a>
            </Link>
          ) : null}
        </div>
      )}
    </section>
  )
}

export default Hero

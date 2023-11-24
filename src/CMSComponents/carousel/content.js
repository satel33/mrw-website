import Link from 'next/link'

const Text = ({ path, title }) => {
  return (
    <div className='grid-cols-1 gap-3 px-2 hidden sm:grid'>
      <div className='flex justify-center items-center gap-2'>
        <Link href={path} prefetch={false}>
          <a className='font-medium block text-lg transition duration-150 ease-in text-black-100 hover:text-primary-80 truncate'>
            {title}
          </a>
        </Link>
      </div>
    </div>
  )
}

const Content = ({ data }) => {
  if (data?._type === 'caseStudy') {
    return (
      <Text
        path={data?.asset?.path ?? '/'}
        title={data?.title ?? data?.asset?.name}
      />
    )
  } else if (data?._type === 'application') {
    return (
      <Text
        path={`/applications/${data?.slug?.current}`}
        title={data?.name ?? ''}
      />
    )
  } else if (data?._type === 'specialtie') {
    return (
      <Text
        path={`/specialties/${data?.slug?.current}`}
        title={data?.name ?? ''}
      />
    )
  } else if (data?._type === 'client') {
    return null
  } else {
    return null
  }
}

export default Content

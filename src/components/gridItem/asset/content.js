import Link from 'next/link'

const Content = ({ data }) => {
  if (data?._type === 'caseStudy') {
    return (
      <div className='grid grid-cols-1 gap-3'>
        <div className='flex justify-between items-center'>
          <Link href={`${data?.asset?.path ?? '/'}`} prefetch={false}>
            <a className='font-medium block text-lg transition duration-150 ease-in text-black-100 hover:text-primary-80 truncate'>
              {data?.title ? data?.title : data?.asset?.name || 'Missing Name'}
            </a>
          </Link>
        </div>
      </div>
    )
  } else if (data?._type === 'application') {
    return (
      <div className='grid grid-cols-1 gap-3'>
        <div className='flex justify-between items-center'>
          <Link href={`/applications/${data?.slug?.current}`} prefetch={false}>
            <a className='font-medium block text-lg transition duration-150 ease-in text-black-100 hover:text-primary-80 truncate'>
              {data?.name ?? 'Missing Name'}
            </a>
          </Link>
        </div>
      </div>
    )
  } else if (data?._type === 'asset') {
    return (
      <div className='grid grid-cols-1 gap-3'>
        <div className='flex justify-between items-center'>
          <Link href={`/designs/${data?.slug?.current}`} prefetch={false}>
            <a className='font-medium block text-lg transition duration-150 ease-in text-black-100 hover:text-primary-80 truncate'>
              {data?.name ?? 'Missing Name'}
            </a>
          </Link>
        </div>
      </div>
    )
  } else if (data?._type === 'specialtie') {
    return (
      <div className='grid grid-cols-1 gap-3'>
        <div className='flex justify-between items-center'>
          <Link href={`/specialties/${data?.slug?.current}`} prefetch={false}>
            <a className='font-medium block text-lg transition duration-150 ease-in text-black-100 hover:text-primary-80 truncate'>
              {data?.name ?? 'Missing Name'}
            </a>
          </Link>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Content

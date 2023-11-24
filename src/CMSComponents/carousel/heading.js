import Link from 'next/link'

const Heading = ({ data }) => {
  return (
    <div className='text-left mb-5'>
      {data?.heading && (
        <Link href={data?.headingLink ?? '/'} prefetch={false}>
          <a className='font-light text-2xl mb-3 transition duration-200 ease-in text-black-100 hover:text-primary-80'>
            {data?.heading}
          </a>
        </Link>
      )}
      {data?.subheading && <p>{data?.subheading}</p>}
    </div>
  )
}

export default Heading

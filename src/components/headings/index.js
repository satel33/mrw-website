import Link from 'next/link'

export const SectionHeading = ({ title, classes }) => {
  return (
    <div className='mx-auto max-w-md text-center mb-5'>
      <h2 className={`${classes ?? 'font-medium text-2xl mb-3'}`}>{title}</h2>
    </div>
  )
}

export const SectionHeadingLeft = ({ title, classes }) => {
  return (
    <div className='text-left mb-5'>
      <h2 className={`${classes ?? 'font-medium text-2xl mb-3'}`}>{title}</h2>
    </div>
  )
}

export const SectionHeadingWithLink = ({
  title,
  category,
  link,
  classes,
  classesWrapper,
}) => {
  return (
    <div className={`mx-auto max-w-md text-center mb-5 ${classesWrapper}`}>
      <Link href={link ?? ''} prefetch={false}>
        <a className='uppercase block mb-3 text-sm text-gray-500 font-medium'>
          {category}
        </a>
      </Link>
      <h2 className={`${classes ?? 'font-medium text-2xl mb-3'}`}>{title}</h2>
    </div>
  )
}

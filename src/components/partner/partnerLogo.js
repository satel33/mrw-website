import Image from 'next/image'
// Sanity
import { urlFor } from '../../../lib/sanity'

const PartnerLogo = ({ logo }) => {
  return (
    <div className='text-center px-4 -mt-6 sm:-mt-10'>
      <Image
        src={urlFor(logo).width(600).height(600).url()}
        height={300}
        width={300}
        objectFit='cover'
        placeholder='blur'
        alt={logo?.alt ?? 'Company logo'}
        blurDataURL={urlFor(logo)
          .width(30)
          .height(30)
          .blur(30)
          .quality(30)
          .url()}
      />
    </div>
  )
}

export default PartnerLogo

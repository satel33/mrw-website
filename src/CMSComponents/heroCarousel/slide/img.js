import Image from 'next/image'
// Sanity
import { urlFor } from '../../../../lib/sanity'

const Img = ({ slide }) => {
  return (
    <div>
      <Image
        layout='fill'
        objectFit='cover'
        src={urlFor(slide?.slideImg).url()}
        placeholder='blur'
        quality={100}
        blurDataURL={urlFor(slide?.slideImg)
          .quality(30)
          .blur(30)
          .height(50)
          .width(50)
          .url()}
      />
      {/* {slide?.backgroundOpacity && (
        <div
          className={`absolute bg-black w-full h-full ${slide?.backgroundOpacity} left-0 top-0`}
        ></div>
      )} */}
    </div>
  )
}

export default Img

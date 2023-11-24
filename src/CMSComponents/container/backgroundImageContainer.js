import Image from 'next/image'
import dynamic from 'next/dynamic'

// Sanity
import { urlFor } from '../../../lib/sanity'
// Components
const PageContent = dynamic(() => import('../pageContent'))

const BackgroundImageContainer = ({ data }) => {
  return (
    <section
      className={`bg- relative ${
        data?.width ?? 'max-w-screen-2xl'
      } px-4 mx-auto py-8 sm:py-12 grid grid-cols-1 md:grid-cols-${
        data?.cols
      } ${data?.verticalGap ?? 'gap-x-7'} ${data?.horizontalGap ?? 'gap-y-7'} ${
        data?.alignItems ?? 'items-start'
      }`}
    >
      <div>
        <Image
          layout='fill'
          objectFit='cover'
          src={urlFor(data?.backgroundImage).url()}
          placeholder='blur'
          quality={100}
          blurDataURL={urlFor(data?.backgroundImage)
            .quality(30)
            .blur(30)
            .height(50)
            .width(50)
            .url()}
        />
        {data?.backgroundOpacity && (
          <div
            className={`absolute bg-black w-full h-full ${data?.backgroundOpacity} left-0 top-0`}
          ></div>
        )}
      </div>
      {data?.elements && <PageContent data={data?.elements} />}
    </section>
  )
}

export default BackgroundImageContainer

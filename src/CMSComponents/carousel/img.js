import Image from 'next/image'
import Link from 'next/link'

// Sanity
import { urlFor } from '../../../lib/sanity'
// Components
import SocialShareOverlay from './socialShareOverlay'
// Assets
import PlaceholderImg from '../../../public/placeholder.jpeg'

const Media = ({ path, src, alt, name, slug, blurSrc }) => {
  return (
    <Link href={path}>
      <a className='transition duration-150 shadow-lg hover:shadow-x relative overflow-hidden group'>
        <div className='transition duration-300 ease-in-out transform hover:scale-110'>
          <Image
            src={src}
            layout='responsive'
            objectFit='cover'
            alt={alt}
            width={300}
            height={260}
            placeholder={blurSrc && 'blur'}
            blurDataURL={blurSrc}
          />
        </div>
        <SocialShareOverlay title={name} slug={slug} />
      </a>
    </Link>
  )
}

const Img = ({ data }) => {
  if (data?._type === 'caseStudy') {
    return (
      <Media
        path={data?.asset?.path ?? '/'}
        src={
          data?.asset?.featuredImage
            ? urlFor(data.asset.featuredImage.asset).url()
            : PlaceholderImg
        }
        blurSrc={urlFor(data.asset.featuredImage.asset)
          .width(300)
          .height(300)
          .blur(50)
          .quality(10)
          .url()}
        alt={data?.asset?.featuredImage?.alt ?? ''}
        name={data?.title ?? data?.asset?.name}
        slug={`/projects/${data?.asset?.slug?.current ?? '/'}`}
      />
    )
  } else if (data?._type === 'application') {
    return (
      <Media
        path={`/applications/${data?.slug?.current}`}
        src={
          data?.featuredImage
            ? urlFor(data.featuredImage.asset).url()
            : PlaceholderImg
        }
        blurSrc={urlFor(data.featuredImage.asset)
          .width(300)
          .height(300)
          .blur(50)
          .quality(10)
          .url()}
        alt={data?.asset?.alt ?? ''}
        name={data?.name}
        slug={`/applications/${data?.slug?.current ?? '/'}`}
      />
    )
  } else if (data?._type === 'specialtie') {
    return (
      <Media
        path={`/specialties/${data?.slug?.current}`}
        src={
          data?.featuredImage
            ? urlFor(data.featuredImage.asset).url()
            : PlaceholderImg
        }
        blurSrc={urlFor(data.featuredImage.asset)
          .width(300)
          .height(300)
          .blur(50)
          .quality(10)
          .url()}
        alt={data?.asset?.alt ?? ''}
        name={data?.name}
        slug={`/specialties/${data?.slug?.current ?? '/'}`}
      />
    )
  } else if (data?._type === 'client') {
    return (
      <div className='mx-auto'>
        <Image
          src={
            data?.featuredImage
              ? urlFor(data.featuredImage.asset).url()
              : PlaceholderImg
          }
          objectFit='cover'
          alt={data?.featuredImage?.asset?.alt ?? ''}
          width={150}
          height={150}
          placeholder='blur'
          blurDataURL={
            data?.featuredImage
              ? urlFor(data.featuredImage.asset)
                  .width(300)
                  .height(300)
                  .blur(50)
                  .quality(10)
                  .url()
              : 'data:image/jpeg;base64,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'
          }
        />
      </div>
    )
  } else if (data?._type === 'asset') {
    return (
      <Media
        path={`/designs/${data?.slug?.current}`}
        src={
          data?.featuredImage
            ? urlFor(data.featuredImage.asset).url()
            : PlaceholderImg
        }
        blurSrc={urlFor(data.featuredImage.asset)
          .width(300)
          .height(300)
          .blur(50)
          .quality(10)
          .url()}
        alt={data?.asset?.alt ?? ''}
        name={data?.name}
        path={`/designs/${data?.slug?.current}`}
      />
    )
  } else {
    return null
  }
}

export default Img

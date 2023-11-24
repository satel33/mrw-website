import Head from 'next/head'
// Sanity
import { urlFor } from '../../lib/sanity'

const SEO = ({
  description = "The world's most beautiful 3D textured wall solution. Non-repeating, infinite size, infinite customization. The only limitation is your imagination.",
  title,
  data,
}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='utf-8' />
      <title>{`${title ? title + ' - M|R Walls' : 'M|R Walls'}`}</title>
      <meta name='description' content={data?.description ?? description} />
      <meta name='keywords' content={data?.keywords ?? ''} />
      {data?.robots ? <meta name='robots' content='noindex' /> : null}
      {data?.openGraph ? (
        <>
          <meta property='og:type' content={data?.ogType ?? ''} />
          <meta
            property='og:title'
            content={
              data?.ogTitle ? data?.ogTitle + ' - M|R Walls' : 'M|R Walls'
            }
          />
          <meta
            property='og:description'
            content={data?.ogDescription ? data?.ogDescription : description}
          />
          <meta property='og:url' content={data?.ogUrl ? data?.ogUrl : ''} />
          <meta
            property='og:site_name'
            content={
              data?.ogTitle ? data?.ogTitle + ' - M|R Walls' : 'M|R Walls'
            }
          />
          <meta property='twitter:card' content='summary' />
          <meta
            property='twitter:title'
            content={
              data?.ogTitle ? data?.ogTitle + ' - M|R Walls' : 'M|R Walls'
            }
          />
          <meta
            property='twitter:description'
            content={data?.ogDescription ? data?.ogDescription : description}
          />
          <meta
            property='og:image'
            content={data?.ogImage ? urlFor(data?.ogImage.asset) : ''}
          />
        </>
      ) : null}
    </Head>
  )
}

export default SEO

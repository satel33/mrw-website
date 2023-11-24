import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
// Sanity
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { getDesign, getAllDesignsPath } from '../../lib/queries'
// Utils
import filterDataToSingleItem from '../../src/utils/filterDataToSingleItem'
// Components
const Layout = dynamic(() => import('../../src/components/layout'))
const SEO = dynamic(() => import('../../src/components/seo'))
const Hero = dynamic(() => import('../../src/components/project/hero'))
const Preview = dynamic(() => import('../../src/components/preview/index'))
const FeaturedImage = dynamic(() =>
  import('../../src/components/project/featuredImage')
)
const Description = dynamic(() =>
  import('../../src/components/project/description')
)
const Gallery = dynamic(() =>
  import('../../src/components/project/gallery/index')
)

const CallToActionBlock = dynamic(
  () => import('../../src/components/project/callToActionBlock.js'),
  { ssr: false }
)

const DesignPage = ({ data, preview }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)

  return (
    <Layout>
      <SEO title={page?.name || ''} />
      <Hero
        title={page?.name ?? ''}
        category='Designs'
        link='/designs'
        application={page?.applications ?? null}
        design={page?.designs ?? null}
        sector={page?.sectors ?? null}
      />
      <FeaturedImage image={page?.featuredImage} />
      {page?.description && <Description description={page?.description} />}
      {page?.images && (
        <Gallery images={page?.images} description={page?.descirption} />
      )}
      {preview && <Preview preview={preview} />}
      <CallToActionBlock />
    </Layout>
  )
}

export async function getStaticPaths() {
  const allSlugsQuery = groq`${getAllDesignsPath}`

  const pages = await getClient().fetch(allSlugsQuery)

  const paths = pages.filter((page) => {
    if (page.path) {
      return null
    } else {
      return page
    }
  })

  return {
    paths: paths.map(({ slug }) => `/designs/${slug.current}`),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`${getDesign}`
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if our query failed to return data
  if (!data.length) return { notFound: true }

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { page, query, queryParams },
    },
    revalidate: 60,
  }
}

export default DesignPage

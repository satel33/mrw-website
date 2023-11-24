import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
// Sanity
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { getPartner, getAllPartnersPaths } from '../../lib/queries'
// Utils
import filterDataToSingleItem from '../../src/utils/filterDataToSingleItem'
// Components
const Layout = dynamic(() => import('../../src/components/layout'))
const SEO = dynamic(() => import('../../src/components/seo'))
const Hero = dynamic(() => import('../../src/components/project/hero'))
const PartnerLogo = dynamic(() =>
  import('../../src/components/partner/partnerLogo.js')
)
const PageContent = dynamic(() => import('../../src/CMSComponents/pageContent'))
const Preview = dynamic(() => import('../../src/components/preview/index'))
const PartnerInfo = dynamic(() =>
  import('../../src/components/partner/partnerInfo.js')
)

const PartnerPage = ({ data, preview }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)

  return (
    <Layout>
      <SEO title={page?.name || ''} />
      <Hero title={page?.name ?? ''} category='Partners' link='/partners' />
      {page?.logo && <PartnerLogo logo={page?.logo} />}
      {!page?.email &&
      !page?.phone &&
      !page?.website &&
      !page?.address &&
      !page?.description &&
      !page?.locations ? null : (
        <PartnerInfo
          email={page?.email}
          phone={page?.phone}
          website={page?.website}
          address={page?.address}
          description={page?.description}
          territories={page?.locations}
        />
      )}

      {preview && <Preview preview={preview} />}
      {page?.pageBuilder && <PageContent data={page?.pageBuilder} />}
    </Layout>
  )
}

export async function getStaticPaths() {
  const allSlugsQuery = groq`${getAllPartnersPaths}`

  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map(({ slug }) => `/partners/${slug?.current}`),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`${getPartner}`
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  if (!data.length) return { notFound: true }

  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { page, query, queryParams },
    },
    revalidate: 60,
  }
}

export default PartnerPage

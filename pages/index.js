import dynamic from 'next/dynamic'
import { groq } from 'next-sanity'
// Sanity
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { getHomePage } from '../lib/queries'
// Utils
import filterDataToSingleItem from '../src/utils/filterDataToSingleItem'
// Components
const DynamicWrapper = dynamic(
  () => import('../src/components/dynamicWrapper.js'),
  { ssr: false }
)
const Layout = dynamic(() => import('../src/components/layout'))
const SEO = dynamic(() => import('../src/components/seo'))
const Hero = dynamic(() => import('../src/components/hero'))
const PageContent = dynamic(() => import('../src/CMSComponents/pageContent'), {
  ssr: false,
})
const Preview = dynamic(() => import('../src/components/preview/index'), {
  ssr: false,
})

const HomePage = ({ data, preview }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)

  return (
    <Layout>
      <SEO data={page?.seo} />
      {preview && <Preview preview={preview} />}
      {/* <section>
        <Hero />
      </section> */}
      {page?.pageBuilder && (
        <DynamicWrapper>
          <PageContent data={page?.pageBuilder} />
        </DynamicWrapper>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`${getHomePage}`
  const queryParams = { slug: 'home' }
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

export default HomePage

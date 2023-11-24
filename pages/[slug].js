import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
// Sanity
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { getPage, getAllPagesPaths } from '../lib/queries'
// Utils
import filterDataToSingleItem from '../src/utils/filterDataToSingleItem'
// Components
const Layout = dynamic(() => import('../src/components/layout'))
const SEO = dynamic(() => import('../src/components/seo'))
const Preview = dynamic(() => import('../src/components/preview/index'), {
  ssr: false,
})
const PageContent = dynamic(() => import('../src/CMSComponents/pageContent'))

const Page = ({ data, preview }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)

  return (
    <Layout>
      <SEO title={page?.title} data={page?.seo} />
      {preview && <Preview preview={preview} />}
      {page?.pageBuilder && <PageContent data={page?.pageBuilder} />}
    </Layout>
  )
}

export async function getStaticPaths() {
  const allSlugsQuery = groq`${getAllPagesPaths}`
  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map((slug) => `/${slug}`),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`${getPage}`
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if our query failed to return data
  if (!data.length) return { notFound: true }

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      // Pass down the "preview mode" boolean to the client-side
      preview,
      // Pass down the initial content, and our query
      data: { page, query, queryParams },
    },
    revalidate: 60,
  }
}

export default Page

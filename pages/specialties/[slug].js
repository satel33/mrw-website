import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
// Sanity
import { getClient } from '../../lib/sanity.server'
import {
  getAllSpecialtieTagsPaths,
  getAllSpecialtieTagDesigns,
  getSpecialtieTag,
} from '../../lib/queries'
// Utils
import filterDataToSingleItem from '../../src/utils/filterDataToSingleItem'
// Components
const Layout = dynamic(() => import('../../src/components/layout'))
const SEO = dynamic(() => import('../../src/components/seo'))
const MasonryGrid = dynamic(() =>
  import('../../src/components/grids/masonryGrid')
)
const CallToActionBlock = dynamic(
  () => import('../../src/components/project/callToActionBlock.js'),
  { ssr: false }
)

import { SectionHeadingWithLink } from '../../src/components/headings/index'

const SpecialtiePage = ({ data, preview }) => {
  return (
    <Layout>
      <SEO title={data?.tag[0].name ?? ''} />
      <section className='px-4 mx-auto py-8'>
        <SectionHeadingWithLink
          link='/specialties'
          category='Specialties'
          title={data?.tag[0].name ?? ''}
          classesWrapper='pt-6 pb-2'
          classes='text-3xl font-light  text-black-100 sm:text-5xl'
        />
        <MasonryGrid data={data?.designs ?? []} />
      </section>
      <CallToActionBlock />
    </Layout>
  )
}

export async function getStaticPaths() {
  const allSlugsQuery = groq`${getAllSpecialtieTagsPaths}`

  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map(({ slug }) => `/specialties/${slug.current}`),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const designsQuery = groq`${getAllSpecialtieTagDesigns}`
  const tagQuery = groq`${getSpecialtieTag}`
  const queryParams = { slug: params.slug }

  const designs = await getClient(preview).fetch(designsQuery, queryParams)
  const tag = await getClient(preview).fetch(tagQuery, queryParams)

  return {
    props: {
      preview,
      data: { designs, tag },
    },
    revalidate: 60,
  }
}

export default SpecialtiePage

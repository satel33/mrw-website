import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
// Sanity
import { getClient } from '../../lib/sanity.server'
import { getAllSpecialties, getAllSpecialtieTags } from '../../lib/queries'
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

import { SectionHeading } from '../../src/components/headings/index'

const SpecialtiesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Specialties' />
      <section className='px-4 mx-auto py-8'>
        <SectionHeading
          title='Specialties'
          classes='text-3xl font-light pt-6 pb-2 text-black-100 sm:text-5xl'
        />

        <MasonryGrid data={data ?? []} />
      </section>
      <CallToActionBlock />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const query = groq`${getAllSpecialtieTags}`

  const data = await getClient(preview).fetch(query)

  const page = data

  return {
    props: {
      preview,
      data: page,
    },
    revalidate: 60,
  }
}

export default SpecialtiesPage

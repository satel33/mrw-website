import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
// Sanity
import { getClient } from '../lib/sanity.server'
import { getAllClients } from '../lib/queries'
// Components
const Layout = dynamic(() => import('../src/components/layout'))
const SEO = dynamic(() => import('../src/components/seo'))
const BasicGrid = dynamic(() => import('../src/components/grids/basicGrid'))
import { SectionHeading } from '../src/components/headings/index'

const Clients = ({ data }) => {
  return (
    <Layout>
      <SEO title='Clients' />
      <section className='px-4 mx-auto py-8 max-w-screen-xl'>
        <SectionHeading
          title='Clients'
          classes='text-5xl font-light pt-6 text-black-100'
        />
        <BasicGrid data={data ?? []} />
      </section>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const query = groq`${getAllClients}`

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

export default Clients

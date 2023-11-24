import dynamic from 'next/dynamic'
import { groq } from 'next-sanity'
// Sanity
import { getClient } from '../../lib/sanity.server'
import { getAllPartners } from '../../lib/queries'
// Hooks
import usePartnersSearch from '../../src/hooks/usePartnersSearch'
// Components
const Layout = dynamic(() => import('../../src/components/layout'))
const SEO = dynamic(() => import('../../src/components/seo'))
const PartnersSearch = dynamic(() =>
  import('../../src/components/partnersSearch/index.js')
)
const PartnersMap = dynamic(() => import('../../src/components/partnersMap'))
const BasicGrid = dynamic(() =>
  import('../../src/components/grids/basicGrid.js')
)
import { SectionHeading } from '../../src/components/headings/index'

const Partners = ({ data }) => {
  const { searchBy, setSearchBy, partners, filters, setFilters } =
    usePartnersSearch(data)

  return (
    <Layout>
      <SEO title='Sales Partners' />
      <section className='max-w-screen-2xl px-4 mx-auto py-8'>
        <SectionHeading
          title='Partners'
          classes='text-3xl font-light mb-4 py-6 text-black-100 sm:text-5xl'
        />
        <PartnersSearch
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          partners={data}
          filters={filters}
          setFilters={setFilters}
        />
        <BasicGrid data={partners ?? []} hasLink='true' linkTo='/partners' />
        {/* {searchBy === 'country' ? (
          <BasicGrid data={partners ?? []} hasLink='true' linkTo='/partners' />
        ) : (
          <PartnersMap data={data} />
        )} */}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`${getAllPartners}`
  const data = await getClient(preview).fetch(query)

  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}

export default Partners

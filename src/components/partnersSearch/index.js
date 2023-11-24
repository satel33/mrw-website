import dynamic from 'next/dynamic'

// Components
import SearchToggler from './searchToggler'
const TextSearch = dynamic(() => import('./textSearch'), { ssr: false })
const NoResults = dynamic(() => import('./noResults.js'), { ssr: false })

const PartnersSearch = ({
  searchBy,
  setSearchBy,
  partners,
  filters,
  setFilters,
}) => {
  return (
    <div>
      <SearchToggler searchBy={searchBy} setSearchBy={setSearchBy} />
      {searchBy === 'country' && (
        <TextSearch
          partners={partners}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      {partners.length === 0 && <NoResults />}
    </div>
  )
}

export default PartnersSearch

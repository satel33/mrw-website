// Components
import SearchResult from './searchResult'

const SearchResults = ({ results, toggleSearch }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
      {results.map((res) => (
        <SearchResult
          key={res.objectID}
          image={res?.image}
          title={res?.title}
          slug={res?.slug}
          toggleSearch={toggleSearch}
        />
      ))}
    </div>
  )
}

export default SearchResults

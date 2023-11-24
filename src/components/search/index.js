// Components
import SearchInput from './searchInput'
import SearchResults from './searchResults'
import ResultsCount from './resultsCount'
import CloseBtn from './closeBtn'

const Search = ({ search, query, setQuery, results, toggleSearch }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 flex-col transition duration-300 ${
        search ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: search ? '20' : '-5' }}
    >
      <div className='max-w-screen-2xl p-4 w-full mx-auto text-center overflow-y-auto h-full mt-28 sm:mt-56 scrollbar-none'>
        <CloseBtn toggleSearch={toggleSearch} />
        <SearchInput query={query} setQuery={setQuery} />
        <ResultsCount results={results} query={query} />
        <SearchResults results={results} toggleSearch={toggleSearch} />
      </div>
    </div>
  )
}

export default Search

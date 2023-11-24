const SearchToggler = ({ setSearchBy, searchBy }) => {
  return (
    <div className='flex items-center justify-center flex-wrap -mt-6 mb-4'>
      <button
        onClick={() => setSearchBy('country')}
        className={`p-2 transition duration-100 opacity-75 ${
          searchBy === 'country' && 'font-medium underline opacity-100'
        } hover:opacity-100`}
      >
        Search by Country / Partner
      </button>
      {/* <button
        onClick={() => setSearchBy('map')}
        className={`p-2 transition duration-100 opacity-75 ${
          searchBy === 'map' && 'font-medium underline opacity-100'
        } hover:opacity-100`}
      >
        Search by Map
      </button> */}
    </div>
  )
}

export default SearchToggler

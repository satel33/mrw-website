// Asset
import { CloseIcon } from '../../icons/index'

const SearchInput = ({ query, setQuery }) => {
  return (
    <div className='flex items-center justify-center relative max-w-4xl mx-auto'>
      <input
        ref={(input) => input && input.focus()}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Enter Design or Application or Color, or a descriptor.'
        className='px-2 py-4 w-full border-b border-black text-center text-2xl'
      />
      <button
        className={`flex items-center justify-center bg-gray-100 p-1 rounded-full absolute right-0 transition duration-200 hover:bg-gray-200 ${
          query ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => {
          if (query) {
            setQuery('')
          }
        }}
      >
        <CloseIcon />
      </button>
    </div>
  )
}

export default SearchInput

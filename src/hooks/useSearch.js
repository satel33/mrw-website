import { useState, useEffect } from 'react'
import useKeypress from 'react-use-keypress'
import { mainSearch } from '../utils/algolia'

// Utils
import keys from '../utils/keys'

const useSearch = (location) => {
  const [search, toggleSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      mainSearch(query, setResults)
    }

    setResults([])
  }, [query])

  if (location !== '/designs') {
    useKeypress('Escape', () => {
      setQuery('')
      return toggleSearch(false)
    })

    useKeypress(keys, (event) => {
      return toggleSearch(true)
    })
  }

  return {
    toggleSearch,
    search,
    query,
    setQuery,
    results,
  }
}

export default useSearch

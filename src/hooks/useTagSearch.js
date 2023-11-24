import { useState, useEffect } from 'react'

const useTagSearch = (data) => {
  const [filters, setFilters] = useState([])
  const [designs, setDesigns] = useState([])

  useEffect(() => {
    if (filters.length) {
      setDesigns(() => {
        return data.filter((page) => {
          return filters.every((tag) => {
            return page.tags.some((x) => x.name === tag.name)
          })
        })
      })
    } else {
      setDesigns([
        ...data.filter((x) => {
          return !x?.applications?.some((y) => y.name === 'Swatch')
        }),
      ])
    }
  }, [filters])

  return {
    filters,
    setFilters,
    designs,
    setDesigns,
  }
}

export default useTagSearch

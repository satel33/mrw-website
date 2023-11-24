import { useState, useEffect } from 'react'

const usePartnersSearch = (data) => {
  const [partners, setPartners] = useState([])
  const [filters, setFilters] = useState([])
  const [searchBy, setSearchBy] = useState('country')

  useEffect(() => {
    if (filters.length) {
      setPartners(() => {
        let strings = filters.map((val) => val.value) // Array of strings

        return data.filter((partner) => {
          return partner.locations.some(
            (i) => strings.includes(i.country) || strings.includes(partner.name)
          )
        })
      })
    } else {
      setPartners(data)
    }
  }, [filters])

  return {
    searchBy,
    setSearchBy,
    partners,
    filters,
    setFilters,
  }
}

export default usePartnersSearch

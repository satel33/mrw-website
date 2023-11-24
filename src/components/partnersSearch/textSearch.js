import Select from 'react-select'
import { useEffect, useState } from 'react'

const customStyles = {
  multiValueLabel: (provided, state) => {
    return {
      ...provided,
      color: '#1E1B18',
      paddingRight: 6,
      fontSize: 14,
      fontWeight: 500,
    }
  },
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      cursor: 'pointer',
    }
  },
  clearIndicator: (provided, state) => {
    return {
      ...provided,
      cursor: 'pointer',
    }
  },
  option: (provided, state) => {
    return {
      ...provided,
      cursor: 'pointer',
    }
  },
}

const TextSearch = ({ partners, filters, setFilters }) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    let teritories = []
    let names = []

    partners.map((partner) => {
      partner.locations.map((location) => {
        return teritories.push({
          value: location.country,
          label: location.country,
        })
      })
      names.push({ value: partner.name, label: partner.name })
    })

    setOptions([
      {
        label: 'Countries',
        options: teritories.filter(
          (val, i, a) => a.findIndex((t) => t.value === val.value) === i
        ),
      },
      { label: 'Partners', options: names },
    ])
  }, [])

  return (
    <div className='max-w-lg mx-auto mb-4'>
      <Select
        options={options}
        isMulti
        placeholder='Search by Country or Name'
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,

          colors: {
            ...theme.colors,
            primary25: '#d8e9f5',
            primary: '#519dd1',
          },
        })}
        onChange={(e) => {
          let values = e.map((value) => {
            let obj = {
              value: value.value,
              label: value.label,
            }
            return obj
          })
          setFilters(values)
        }}
      />
    </div>
  )
}

export default TextSearch

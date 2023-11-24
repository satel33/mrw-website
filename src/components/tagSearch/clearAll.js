const ClearAll = ({ filters, setFilters, type }) => {
  const handleClearAll = () => {
    return setFilters(() => [...filters.filter((x) => x.type !== type)])
  }
  return (
    <button
      className='underline text-sm mr-3 w-max py-3'
      onClick={handleClearAll}
    >
      Clear All
    </button>
  )
}

export default ClearAll

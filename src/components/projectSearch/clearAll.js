const ClearAll = ({ project, setProject }) => {
  const handleClearAll = () => {
    return setProject('')
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

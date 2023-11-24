const CloseBtn = ({ toggleSearch }) => {
  return (
    <>
      <button
        onClick={() => toggleSearch(false)}
        className='hidden md:inline-block'
      >
        Press Escape to Exit
      </button>
      <button
        onClick={() => toggleSearch(false)}
        className='inline-block md:hidden'
      >
        Click Here to Exit
      </button>
    </>
  )
}

export default CloseBtn

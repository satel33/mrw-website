const Pagination = ({ slider, currentSlide }) => {
  return (
    <div className='absolute bottom-2 flex w-full justify-center items-center'>
      {slider && (
        <div>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={`dot h-3 w-3 rounded-full mx-1 border border-gray-700 ${
                  currentSlide === idx ? 'bg-black' : 'bg-white'
                }`}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Pagination

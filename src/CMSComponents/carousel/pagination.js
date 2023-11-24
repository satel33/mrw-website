// Assets
import { ArrowIconFullThin } from '../../icons/index'

const Pagination = ({ pages, onClick, activePage, carouselRef }) => {
  return (
    <div className='flex sm:hidden mt-4 flex-wrap justify-between items-center w-full'>
      <button onClick={() => carouselRef.current.slidePrev()} className='p-1'>
        <ArrowIconFullThin
          size='h-10 w-10'
          classes='transform -rotate-90 transform transition duration-100 hover:-translate-x-1'
        />
      </button>
      <div className='flex items-center '>
        {pages.map((page) => {
          const isActivePage = activePage === page
          return (
            <button
              className={`h-1 w-6  transition duration-200 ease  ${
                isActivePage ? 'bg-primary-100 ' : 'bg-gray-200'
              }`}
              key={page}
              active={isActivePage.toString()}
              onClick={() => onClick(page)}
            ></button>
          )
        })}
      </div>
      <button onClick={() => carouselRef.current.slideNext()} className='p-1'>
        <ArrowIconFullThin
          size='h-10 w-10'
          classes='transform rotate-90 transform transition duration-100 hover:translate-x-1'
        />
      </button>
    </div>
  )
}

export default Pagination

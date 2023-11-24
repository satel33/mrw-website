import dynamic from 'next/dynamic'
import { useState } from 'react'
// Assets
import { CloseIcon } from '../../icons/index'
// Components
const Item = dynamic(() => import('./item'))
const ClearAll = dynamic(() => import('./clearAll.js'))

const Category = ({ title, tags, type, filters, setFilters }) => {
  const [open, toggleOpen] = useState(false)
  return (
    <div className='max-h-52 overflow-y-scroll relative no-scrollbar'>
      <div className='flex items-center bg-white justify-between px-2 border-b cursor-pointer w-full sticky top-0 z-10'>
        <button
          onClick={() => toggleOpen(!open)}
          className='w-full text-left py-3 '
        >
          {title}
        </button>
        <div className='flex items-center'>
          {filters.some((x) => x.type === type) && (
            <ClearAll setFilters={setFilters} type={type} filters={filters} />
          )}
          <button onClick={() => toggleOpen(!open)} className='py-3'>
            <CloseIcon
              classes={`transform transition duration-100 ${
                open ? 'rotate-90' : 'rotate-45'
              }`}
              size='w-5 h-5'
            />
          </button>
        </div>
      </div>
      {open && tags?.length ? (
        <div className='px-2 py-3'>
          {tags?.map((tag) => (
            <Item
              key={tag._id}
              name={tag.name}
              type={tag._type}
              setFilters={setFilters}
              filters={filters}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Category

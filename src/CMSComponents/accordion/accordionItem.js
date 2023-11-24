import { useState } from 'react'

// Assets
import { ArrowIcon } from '../../icons/index'

const AccordionItem = ({ item }) => {
  const [open, toggleOpen] = useState(false)
  return (
    <div className='p-4 border cursor-pointer'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={() => toggleOpen(!open)}
      >
        <p className='font-medium text-xl'>{item?.headline}</p>
        <ArrowIcon
          classes={`transform duration-200 transition ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      {open && (
        <div className='py-3'>
          <p>{item?.text}</p>
        </div>
      )}
    </div>
  )
}

export default AccordionItem

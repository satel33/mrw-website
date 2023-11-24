import dynamic from 'next/dynamic'

// Components
const AccordionItem = dynamic(() => import('./accordionItem'))

const Accordion = ({ data }) => {
  return (
    <div className='bg-white max-w-full px-4 grid grid-cols-1 gap-3 cursor-pointer'>
      {data?.accordionItem?.map((item) => (
        <AccordionItem item={item} key={item._key} />
      ))}
    </div>
  )
}

export default Accordion

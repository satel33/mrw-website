import dynamic from 'next/dynamic'

// Components
const Map = dynamic(() => import('./map'), { ssr: false })

const PartnersMap = ({ data }) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='p-1 cursor-pointer'>
        <Map data={data} />
      </div>
    </div>
  )
}

export default PartnersMap

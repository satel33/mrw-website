import dynamic from 'next/dynamic'
// Components
const Img = dynamic(() => import('./img'))
const Content = dynamic(() => import('./content'))

const Slide = ({ data, type }) => {
  return (
    <div className='w-full grid grid-cols-1 gap-2 group'>
      <Img data={data} />
      {/* <Content data={data} /> */}
    </div>
  )
}

export default Slide

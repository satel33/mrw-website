// Compoonents
import RichText from '../../../CMSComponents/richText/index'

const Content = ({ slide }) => {
  return (
    <div
      className={`flex flex-col relative h-full ${
        slide?.horizontalTextAlign ?? 'items-start'
      } ${slide?.verticalTextAlign ?? 'justify-end'}`}
    >
      <div className='max-w-xl mx-6 mb-10  md:m-10 lg:m-20'>
        <RichText data={slide?.slideText} />
      </div>
    </div>
  )
}

export default Content

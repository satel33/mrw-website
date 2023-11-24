// Components
import Img from './img'

const ImageGallery = ({ data }) => {
  return (
    <section className='grid grid-cols-1 px-4 py-8 sm:py-12 max-w-screen-2xl mx-auto  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data?.images?.map((img) => (
        <Img img={img} key={img._key} />
      ))}
    </section>
  )
}

export default ImageGallery

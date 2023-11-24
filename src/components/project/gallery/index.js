// Components
import Img from './img'

const Gallery = ({ images, description }) => {
  return (
    <section
      className={`px-4 ${
        !description && 'pt-8'
      } pb-8 sm:pb-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
    >
      {images?.map((img) => (
        <Img img={img} key={img._key} />
      ))}
    </section>
  )
}

export default Gallery

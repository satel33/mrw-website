// Components
import { CMS_COMPONENTS } from './index'

const PageContent = ({ data }) => {
  let content = data?.map((block, index) => {
    let el = null
    switch (block._type) {
      case 'hero':
        el = <CMS_COMPONENTS.Hero data={block} />
        break
      case 'callToAction':
        el = <CMS_COMPONENTS.CallToAction data={block} />
        break
      case 'downloadBtn':
        el = <CMS_COMPONENTS.DownloadBtn data={block} />
        break
      case 'gallery':
        el = <CMS_COMPONENTS.ImageGallery data={block} />
        break
      case 'accordion':
        el = <CMS_COMPONENTS.Accordion data={block} />
        break
      case 'video':
        el = <CMS_COMPONENTS.Video data={block} />
        break
      case 'richText':
        el = <CMS_COMPONENTS.RichText data={block} />
        break
      case 'carousel':
        el = <CMS_COMPONENTS.Swiper data={block} />
        break
      case 'heroCarousel':
        el = <CMS_COMPONENTS.HeroSwiper data={block} />
        break
      case 'container':
        el = <CMS_COMPONENTS.Container data={block} />
        break
      case 'poster':
        el = <CMS_COMPONENTS.Poster data={block} />
        break
      case 'callToAction':
        el = <CMS_COMPONENTS.CallToAction data={block} />
        break
      case 'line':
        el = <CMS_COMPONENTS.Line />
        break
      case 'bigBlockCallToAction':
        el = <CMS_COMPONENTS.BigBlockCallToAction data={block} />
        break
      case 'spacer':
        el = <CMS_COMPONENTS.Spacer data={block} />
        break
      default:
        el = null
    }

    return el
  })

  return content
}
export default PageContent

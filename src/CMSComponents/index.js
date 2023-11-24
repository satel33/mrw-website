import dynamic from 'next/dynamic'
// Components
const Accordion = dynamic(() => import('./accordion/index'))
const ImageGallery = dynamic(() => import('./imageGallery/index'))
const Video = dynamic(() => import('./video/index'))
const Hero = dynamic(() => import('./hero/index'))
const RichText = dynamic(() => import('./richText/index'))
const Swiper = dynamic(() => import('./carousel/index'))
const Container = dynamic(() => import('./container/index'))
const Poster = dynamic(() => import('./poster/index'))
const CallToAction = dynamic(() => import('./callToAction/index'))
const DownloadBtn = dynamic(() => import('./downloadBtn/index'))
const Line = dynamic(() => import('./line/index'))
const BigBlockCallToAction = dynamic(() =>
  import('./bigBlockCallToAction/index')
)
const Spacer = dynamic(() => import('./spacer/index'))
const HeroSwiper = dynamic(() => import('./heroCarousel/index'))

export const CMS_COMPONENTS = {
  Hero: (props) => <Hero {...props} />,
  Accordion: (props) => <Accordion {...props} />,
  ImageGallery: (props) => <ImageGallery {...props} />,
  Video: (props) => <Video {...props} />,
  Hero: (props) => <Hero {...props} />,
  RichText: (props) => <RichText {...props} />,
  Swiper: (props) => <Swiper {...props} />,
  HeroSwiper: (props) => <HeroSwiper {...props} />,
  Container: (props) => <Container {...props} />,
  Poster: (props) => <Poster {...props} />,
  CallToAction: (props) => <CallToAction {...props} />,
  DownloadBtn: (props) => <DownloadBtn {...props} />,
  Line: (props) => <Line {...props} />,
  BigBlockCallToAction: (props) => <BigBlockCallToAction {...props} />,
  Spacer: (props) => <Spacer {...props} />,
}

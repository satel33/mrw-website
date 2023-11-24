import Link from 'next/link'
import Img from './img'
import Content from './content'

const Item = ({ data }) => {
  return (
    <Link
      href={`${
        data?.asset?.slug?.current
          ? `/projects/${data?.asset?.slug?.current}`
          : '/'
      }`}
    >
      <a>
        <Img image={data?.asset} />
        <Content title={data?.title ?? 'Missing Title'} />
      </a>
    </Link>
  )
}

export default Item

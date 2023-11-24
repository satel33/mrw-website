import { PortableText } from '../../../lib/sanity'

const RichText = ({ data }) => {
  return <PortableText blocks={data?.blockContent} />
}

export default RichText

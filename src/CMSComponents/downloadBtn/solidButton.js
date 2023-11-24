// Utils
import { enter, leave } from './utils/hover'
import { urlFor } from '../../../lib/sanity'

const SolidButton = ({ data, mx }) => {
  if (data?.downloadFile) {
    return (
      <a
        onMouseEnter={(e) => enter(e, data)}
        onMouseLeave={(e) => leave(e, data)}
        style={{
          backgroundColor: data?.backgroundColor ?? 'black',
          borderColor: data?.borderColor ?? 'transparent',
          color: data?.textColor ?? 'white',
        }}
        download
        href={`https://cdn.sanity.io/files/oz8hb3li/production/${
          data?.downloadFile?.asset?._ref?.split('-')[1]
        }.${data?.downloadFile?.asset?._ref?.split('-')[2]}`}
        className={`px-6 py-3 border-2  font-medium transition duration-200 block max-w-max ${
          mx ? data?.align ?? '' : data?.align ?? 'mx-auto'
        } my-4 shadow-xl`}
      >
        {data?.buttonText}
      </a>
    )
  } else {
    return (
      <a
        onMouseEnter={(e) => enter(e, data)}
        onMouseLeave={(e) => leave(e, data)}
        style={{
          background: data?.backgroundColor ?? 'black',
          borderColor: data?.borderColor ?? 'transparent',
          color: data?.textColor ?? 'white',
        }}
        className={`px-6 py-3 border-2  font-medium transition duration-200 block max-w-max ${
          mx ? data?.align ?? '' : data?.align ?? 'mx-auto'
        } my-4 shadow-xl`}
      >
        {data?.buttonText}
      </a>
    )
  }
}

export default SolidButton

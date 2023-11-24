import Link from 'next/link'
// Context
import { useContactModal } from '../../context/contactModalContext'
// Utils
import { enter, leave } from './utils/hover'

const OutlineButton = ({ data, mx }) => {
  const { toggleModal } = useContactModal()

  if (data?.contactModal) {
    return (
      <button
        onMouseEnter={(e) => enter(e, data)}
        onMouseLeave={(e) => leave(e, data)}
        onClick={() => toggleModal(true)}
        style={{
          borderColor: data?.borderColor ?? 'transparent',
          color: data?.textColor ?? 'white',
        }}
        className={`transparent px-6 py-3 border-2  font-medium transition duration-200 block max-w-max ${
          mx ? data?.align ?? '' : data?.align ?? 'mx-auto'
        } my-4 shadow-xl hover:opacity-90`}
      >
        {data?.linkText}
      </button>
    )
  } else if (data?.internalUrl) {
    return (
      <Link href={data?.internalUrl} prefetch={false}>
        <a
          onMouseEnter={(e) => enter(e, data)}
          onMouseLeave={(e) => leave(e, data)}
          style={{
            borderColor: data?.borderColor ?? 'transparent',
            color: data?.textColor ?? 'white',
          }}
          className={`transparent px-6 py-3 border-2  font-medium transition duration-200 block max-w-max ${
            mx ? data?.align ?? '' : data?.align ?? 'mx-auto'
          } my-4 shadow-xl hover:opacity-90`}
        >
          {data?.linkText}
        </a>
      </Link>
    )
  } else {
    return (
      <a
        onMouseEnter={(e) => enter(e, data)}
        onMouseLeave={(e) => leave(e, data)}
        style={{
          borderColor: data?.borderColor ?? 'transparent',
          color: data?.textColor ?? 'white',
        }}
        className={`transparent px-6 py-3 border-2  font-medium transition duration-200 block max-w-max ${
          mx ? data?.align ?? '' : data?.align ?? 'mx-auto'
        } my-4 shadow-xl hover:opacity-90`}
        href={data?.externalUrl}
        target='_blank'
        rel='noreferrer'
      >
        {data?.linkText}
      </a>
    )
  }
}

export default OutlineButton

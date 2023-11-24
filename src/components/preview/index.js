import { useRouter } from 'next/router'

const Preview = ({ preview }) => {
  const router = useRouter()
  const exitPreview = async () => {
    const url =
      process.env.NODE_ENV === 'production'
        ? 'https://mrwalls.co/api/exit-preview'
        : 'http://localhost:3000/api/exit-preview'
    const res = await fetch(url)
    const data = await res.json()

    if (data.preview === false) {
      return router.reload()
    }
  }
  return (
    preview && (
      <button
        onClick={() => exitPreview()}
        className='bg-red-600 transition duration-200 p-2  w-full fixed bottom-0 z-50 text-white font-medium hover:bg-red-400 text-sm'
      >
        You are currently in Preview Mode. Click here to Exit.
      </button>
    )
  )
}

export default Preview

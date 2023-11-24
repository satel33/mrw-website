const Video = ({ data }) => {
  let { url, videoLabel } = data

  return (
    <div
      className='relative h-0'
      style={{ paddingTop: '56.25%', paddingBottom: 25 }}
    >
      <iframe
        src={data?.url}
        muted
        loop
        autoPlay
        allowFullScreen
        className='absolute top-0 left-0 w-full h-full'
      />
    </div>
  )
}

export default Video

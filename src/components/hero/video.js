import { useEffect, useState } from 'react'

const Video = () => {
  const [videoSrc, setVideoSrc] = useState('')
  useEffect(() => {
    if (videoSrc) {
      return (document.getElementById('hero-video-main').playbackRate = 0.5)
    }
    setVideoSrc(
      'https://video.squarespace-cdn.com/content/v1/5e55de4384419a233c035848/a8c60744-3c3a-4646-91fc-9bddec1ab260/mp4-h264-aac-1920:1080'
    )
  }, [videoSrc])

  return (
    <video
      id='hero-video-main'
      className='absolute top-0 left-0 w-full h-full object-cover opacity-90'
      style={{ zIndex: -1 }}
      muted
      loop
      autoPlay
      playsInline
      src={videoSrc}
    >
      <source src={videoSrc} provider='html5' size='1080' />
      <source src={videoSrc} provider='html5' size='360' />
    </video>
  )
}

export default Video

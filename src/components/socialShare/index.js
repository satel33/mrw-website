import { FacebookShareButton, LinkedinShareButton } from 'react-share'

// Assets
import { FacebookIcon, LinkedinIcon } from '../../icons/index'

const SocialShare = ({ shareUrl }) => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <FacebookShareButton
        quote='Some quote'
        url={`https://mrw.web5.software${shareUrl}`}
      >
        <FacebookIcon classes='text-white' size='w-7 h-7' />
      </FacebookShareButton>
      <LinkedinShareButton
        quote='Some quote'
        url={`https://mrw.web5.software${shareUrl}`}
      >
        <LinkedinIcon classes='text-white' size='w-7 h-7' />
      </LinkedinShareButton>
    </div>
  )
}

export default SocialShare

import dynamic from 'next/dynamic'

// Components
const SolidButton = dynamic(() => import('./solidButton'))
const OutlineButton = dynamic(() => import('./outlineButton'))

const CallToAction = ({ data, mx }) => {
  if (data?.buttonType === 'outline') {
    return <OutlineButton data={data} mx={mx} />
  } else {
    return <SolidButton data={data} mx={mx} />
  }
}

export default CallToAction

import dynamic from 'next/dynamic'

const BackgroundImageContainer = dynamic(() =>
  import('./backgroundImageContainer')
)
const DefaultContainer = dynamic(() => import('./defaultContainer'))

const Container = ({ data }) => {
  if (data?.backgroundImage) {
    return <BackgroundImageContainer data={data} />
  } else {
    return <DefaultContainer data={data} />
  }
}

export default Container

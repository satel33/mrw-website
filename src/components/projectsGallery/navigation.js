import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Assets
import { ArrowIcon } from '../../icons'

function ArrowLeft(props) {
  return (
    <button
      onClick={props.onClick}
      className={`h-12 absolute left-2 p-2 m-auto top-0 bottom-0 bg-black text-white border border-gray-700 transition duration-150 ease-in hover:bg-opacity-70 ${
        props.hidden && 'hidden'
      }`}
    >
      <ArrowIcon classes={`transform duration-200 transition -rotate-90`} />
    </button>
  )
}

function ArrowRight(props) {
  return (
    <button
      onClick={props.onClick}
      className={`h-12 absolute right-2 p-2 m-auto top-0 bottom-0 bg-black text-white border border-gray-700 transition duration-150 ease-in hover:bg-opacity-70 ${
        props.hidden && 'hidden'
      }`}
    >
      <ArrowIcon classes={`transform duration-200 transition rotate-90`} />
    </button>
  )
}

const Navigation = ({ project, setProject, data, allData }) => {
  const [active, setActive] = useState()
  const { push } = useRouter()

  useEffect(() => {
    setActive(allData.findIndex((x) => x.title === project))
  }, [project])

  const handleNext = () => {
    return push(data[0].asset.path)
    // if (allData.length - 1 === active) {
    //   console.log('Cant go Next anymore')
    // } else {
    //   return setProject(allData[active + 1].title)
    // }
  }

  const handleBack = () => {
    return push(data[0].asset.path)
    // if (active === 0) {
    //   console.log('Cant go back anymore')
    // } else {
    //   return setProject(allData[active - 1].title)
    // }
  }

  return (
    <div>
      <>
        <ArrowLeft onClick={handleBack} hidden={active === 0} />
        <ArrowRight
          onClick={handleNext}
          hidden={allData.length - 1 === active}
        />
      </>
    </div>
  )
}

export default Navigation

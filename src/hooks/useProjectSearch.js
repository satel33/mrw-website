import { useState, useEffect } from 'react'

const useProjectSearch = (data) => {
  const [designs, setDesigns] = useState([])
  const [project, setProject] = useState(data[0].title)

  useEffect(() => {
    if (project) {
      setDesigns(() => {
        return data.filter((x) => {
          return x.title === project
        })
      })
    } else {
      setDesigns(data)
    }
  }, [project])

  return {
    project,
    setProject,
    designs,
    setDesigns,
  }
}

export default useProjectSearch

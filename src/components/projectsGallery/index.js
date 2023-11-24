import { useState } from 'react'
import Item from './item'
import Navigation from './navigation'

const ProjectsGallery = ({ data, allData, project, setProject }) => {
  const [control, setControl] = useState(false)

  return (
    <div
      className='relative bg-gray-50 hidden md:block'
      style={{ height: 'calc(100vh - 128px)' }}
      onMouseEnter={() => setControl(true)}
      onMouseLeave={() => setControl(false)}
    >
      {project ? (
        data.map((x) => {
          return <Item data={x} key={x._id} />
        })
      ) : (
        <Item data={data[0]} key={data[0]._id} />
      )}
      {control && (
        <Navigation
          data={data}
          project={project}
          setProject={setProject}
          allData={allData}
        />
      )}
    </div>
  )
}

export default ProjectsGallery

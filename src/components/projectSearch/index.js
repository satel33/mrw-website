import dynamic from 'next/dynamic'
// Components
const Category = dynamic(() => import('./category.js'), { ssr: false })

const ProjectSearch = ({ project, setProject, data }) => {
  return (
    <div>
      <div className='grid grid-cols-1'>
        <Category
          title='Search Projects'
          data={data?.page ?? []}
          setProject={setProject}
          project={project}
        />
      </div>
    </div>
  )
}

export default ProjectSearch

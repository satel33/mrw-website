// Components
import Item from './item'

const Sidebar = ({ data, setProject, project }) => {
  return (
    <div className='px-4 hidden md:block'>
      <div className='border-b mb-4'>
        <p className='text-3xl font-light mb-5 text-black-100 sm:text-4xl'>
          Projects
        </p>
      </div>
      {data?.page?.map((x) => {
        return (
          <Item
            key={x._id}
            title={x?.title}
            setProject={setProject}
            project={project}
          />
        )
      })}
    </div>
  )
}

export default Sidebar

import { LineIcon } from '../../icons/index'

const Item = ({ title, setProject, project }) => {
  return (
    <button
      className={`py-2 flex items-center justify-between w-full transition duration-100 opacity-75 ${
        title === project && 'font-medium'
      } hover:opacity-100`}
      onClick={() => {
        if (project === title) {
          return setProject('')
        } else {
          setProject(title)
        }
      }}
    >
      {title}
      {project === title && <LineIcon />}
    </button>
  )
}

export default Item

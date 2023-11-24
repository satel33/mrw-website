const Item = ({ title, setProject, project }) => {
  return (
    <div>
      <button
        className={`${
          project === title ? 'font-semibold text-terciary-100' : ''
        } text-left py-2 transform transition duration-150 ease-in-out hover:translate-x-1 hover:text-terciary-100`}
        style={{ fontSize: 17 }}
        onClick={() => {
          // if (project === title) {
          //   return setProject('')
          // } else {
          //   setProject(title)
          // }
          setProject(title)
        }}
      >
        {title ?? 'Missing Title'}
      </button>
    </div>
  )
}

export default Item

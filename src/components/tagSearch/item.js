import { LineIcon } from '../../icons/index'

const Item = ({ name, type, filters, setFilters }) => {
  return (
    <button
      className={`py-2 flex items-center justify-between w-full transition duration-100 opacity-75  ${
        filters.some((x) => x.name === name) && 'font-medium'
      } hover:opacity-100`}
      onClick={() => {
        if (filters.some((e) => e.name === name)) {
          return setFilters(() => [...filters].filter((x) => x.name !== name))
        }

        if (filters.some((x) => x.type === type)) {
          return setFilters(() => [
            ...filters.filter((x) => x.type !== type),
            { type, name },
          ])
        }

        return setFilters(() => [...filters, { type, name }])
      }}
    >
      {name}
      {filters.some((x) => x.name === name) && <LineIcon />}
    </button>
  )
}

export default Item

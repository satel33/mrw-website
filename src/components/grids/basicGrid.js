import dynamic from 'next/dynamic'
import Link from 'next/link'

// Components
const BasicItem = dynamic(() => import('../gridItem/basicItem/index.js'))

const BasicGrid = ({ data, hasLink, linkTo }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
      {data?.map((val) => {
        if (hasLink) {
          return (
            <Link href={`${linkTo}/${val.slug.current}`} key={val._id}>
              <a className='text-center'>
                <BasicItem data={val} key={val._id} />
              </a>
            </Link>
          )
        } else {
          return <BasicItem data={val} key={val._id} />
        }
      })}
    </div>
  )
}

export default BasicGrid

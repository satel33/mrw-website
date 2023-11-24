import dynamic from 'next/dynamic'
import { useState } from 'react'
// Components
const Category = dynamic(() => import('./category.js'), { ssr: false })
const MainTags = dynamic(() => import('./mainTags.js'), { ssr: false })
const CategoryWithTextSearch = dynamic(
  () => import('./categoryWithTextSearch.js'),
  { ssr: false }
)

const TagSearch = ({
  tags,
  filters,
  setFilters,
  hasMainTags,
  hasTextSearch,
  desktopOnly,
}) => {
  const [open, toggleOpen] = useState(false)
  return (
    <div className={`mb-0 ${desktopOnly}`}>
      {hasMainTags && (
        <MainTags
          setFilters={setFilters}
          filters={filters}
          open={open}
          toggleOpen={toggleOpen}
        />
      )}

      <div
        className={`grid-cols-1 mx-auto max-w-2xl mb-6 ${
          open || filters.length ? 'hidden sm:grid' : 'grid sm:hidden'
        }`}
        style={{ marginTop: -4 }}
      >
        <CategoryWithTextSearch
          tags={tags}
          setFilters={setFilters}
          filters={filters}
        />
      </div>

      {/* {hasTextSearch ? (
    
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>
          <Category
            type='application'
            title='Applications'
            tags={tags.filter((x) => x._type === 'application')}
            setFilters={setFilters}
            filters={filters}
          />
          <Category
            type='design'
            title='Designs'
            tags={tags.filter((x) => x._type === 'design')}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
      )} */}
    </div>
  )
}

export default TagSearch

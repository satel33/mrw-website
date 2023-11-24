import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// Hooks
import useSearch from '../hooks/useSearch'
// Context
import { useContactModal } from '../context/contactModalContext'
// Components
const Header = dynamic(() => import('../components/header/index'))
const Search = dynamic(() => import('../components/search/index'), {
  ssr: false,
})

const ContactModal = dynamic(() => import('../components/contactModal/index'), {
  ssr: false,
})

const Layout = ({ children }) => {
  const { pathname, asPath } = useRouter()
  const { modal } = useContactModal()
  const { search, toggleSearch, query, setQuery, results } = useSearch(pathname)

  useEffect(() => {
    toggleSearch(false)
  }, [asPath])

  return (
    <div className='flex min-h-screen flex-col'>
      {search && (
        <Search
          search={search}
          query={query}
          setQuery={setQuery}
          results={results}
          toggleSearch={toggleSearch}
        />
      )}
      <Header
        toggleSearch={toggleSearch}
        search={search}
        isHomePage={pathname === '/'}
      />
      <main className='flex-grow'>{children}</main>
      {modal && <ContactModal />}
    </div>
  )
}

export default Layout

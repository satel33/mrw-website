import '../src/styles/globals.css'
import { useEffect, useState } from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'
import { groq } from 'next-sanity'
import { Cookies } from 'react-cookie-consent'
import { getClient } from '../lib/sanity.server'
import { getAllPages } from '../lib/queries'

import { ContactModalContextProvider } from '../src/context/contactModalContext'

const DynamicWrapper = dynamic(
  () => import('../src/components/dynamicWrapper'),
  { ssr: false }
)
const CookieBanner = dynamic(() => import('../src/components/cookies/index'), {
  ssr: false,
})

const Footer = dynamic(() => import('../src/components/footer'), {
  ssr: false,
})

function MyApp({ Component, pageProps, pages }) {
  const [acceptTerms, setAcceptTerms] = useState(true)
  const [previewMode, setPreviewMode] = useState(false)

  useEffect(() => {
    if (!Cookies.get('accept_terms')) {
      return setAcceptTerms(false)
    }
  }, [])

  return (
    <ContactModalContextProvider>
      <Component {...pageProps} />
      <DynamicWrapper>
        <Footer pages={pages} />
      </DynamicWrapper>
      {!acceptTerms && <CookieBanner />}
    </ContactModalContextProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const query = groq`${getAllPages}`
  const pages = await getClient(false).fetch(query)

  const appProps = await App.getInitialProps(appContext)

  return { ...appProps, pages }
}

export default MyApp

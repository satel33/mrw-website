import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

const Cookies = () => {
  return (
    <CookieConsent
      location='bottom'
      style={{ background: '#1E1B18', alignItems: 'center', flexWrap: 'wrap' }}
      buttonStyle={{
        background: '#1E1B18',
        color: '#fff',
        padding: '6px 24px',
        fontWeight: 500,
        border: 'solid 1px white',
      }}
      buttonText='Accept'
      cookieName='accept_terms'
      ariaAcceptLabel='Accept cookies'
    >
      By visiting and using this website, you agree to receive all Cookies on
      this website.{' '}
      <Link href='/privacy-policy'>
        <a className='text-blue-400 underline'>Read More.</a>
      </Link>
    </CookieConsent>
  )
}

export default Cookies

import Airtable from 'airtable'
import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Select from 'react-select'
import { useRouter } from 'next/router'

var base = new Airtable({ apiKey: 'keyGgKgl0eAvg9gY1' }).base(
  'appx1SvF1mBKsnytM'
)

let options = [
  {
    label: 'Instagram',
    value: 'instagram',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin',
  },
  {
    label: 'Facebook',
    value: 'facebook',
  },
  {
    label: 'Google Search',
    value: 'google-search',
  },
  {
    label: 'Pinterest',
    value: 'pinterest',
  },
  {
    label: 'TikTok',
    value: 'tiktok',
  },
  {
    label: 'Corian Representative',
    value: 'corian-representative',
  },
  {
    label: 'Retail Showroom',
    value: 'retail-showroom',
  },
  {
    label: 'From a Friend',
    value: 'friend',
  },
  {
    label: 'Other',
    value: 'other',
  },
]

const Form = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [contactSource, setContactSource] = useState('')
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFormSuccess = () => {
    setLoading(false)
    setName('')
    setLastName('')
    setCompany('')
    setLocation('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
    setContactSource('')
    setFormSuccess('We have received your message and will respond promptly!')

    setTimeout(() => {
      setFormSuccess('')
    }, 5000)
  }

  const handleFormError = () => {
    setFormError('Something went wrong with your submission, please try again.')

    setTimeout(() => setFormError(''), 5000)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    base('Imported table').create(
      [
        {
          fields: {
            'First Name': name,
            'Last Name': lastName,
            'Page Source': window.location.href,
            Message: message,
            Subject: subject,
            Phone: phone,
            Email: email,
            'Project Location': location,
            Company: company,
            'How Did You Hear': contactSource,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err)
          handleFormError()
          return
        }

        handleFormSuccess()
      }
    )
  }

  return (
    <Fade bottom cascade>
      <form
        className='grid grid-cols-1 gap-4 mt-3'
        onSubmit={(e) => submitForm(e)}
      >
        <div className='grid grid-cols-2 gap-4'>
          <input
            placeholder='First Name'
            type='text'
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
          />
          <input
            placeholder='Last Name'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
          />
        </div>
        <Select
          onChange={(e) => setContactSource(e.label)}
          options={options}
          placeholder='How Did You Hear About Us?'
        />
        <input
          placeholder='Company'
          type='text'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
        />
        <input
          placeholder='Project Location'
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
        />
        <div className='grid grid-cols-2 gap-4'>
          <input
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
          />
          <input
            placeholder='Phone'
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
          />
        </div>
        <input
          placeholder='Subject'
          type='text'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full px-2 py-3 border-b transition duration-200 focus:border-primary-90'
          placeholder='Your message...'
          rows='4'
        ></textarea>
        {formError && (
          <span className='font-medium text-red-600'>{formError}</span>
        )}
        {formSuccess !== '' ? (
          <span className='font-medium text-center'>{formSuccess}</span>
        ) : (
          <button
            type='submit'
            className={`${
              loading && 'opacity-50'
            } bg-primary-100 text-white-100 px-4 py-3 font-medium transition duration-200 hover:bg-primary-90`}
          >
            Send Now
          </button>
        )}
      </form>
    </Fade>
  )
}

export default Form

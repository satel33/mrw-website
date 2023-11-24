// Assets
import { InfoIcon } from '../../icons/index'

const PartnerInfo = ({
  website,
  email,
  phone,
  description,
  address,
  territories,
}) => {
  return (
    <section className='max-w-xl mx-auto px-4'>
      <div className='border-b'>
        <div className='border-b p-2 flex items-center justify-between'>
          <p className='font-medium text-lg'>Partner Information</p>
          <InfoIcon />
        </div>
        {territories.length && (
          <div
            className={`px-2 py-3 flex justify-between ${
              territories.length > 1 ? null : 'items-center'
            }`}
          >
            <p>Territory</p>
            <div className='grid grid-cols-1 gap-2'>
              {territories.map((territory) => {
                return (
                  <p className='font-medium text-right' key={territory._id}>
                    {territory.country}
                  </p>
                )
              })}
            </div>
          </div>
        )}
        {website && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Website</p>
            <a
              className='font-medium hover:underline'
              href={website}
              target='_blank'
              rel='noreferrer'
            >
              View Website
            </a>
          </div>
        )}
        {email && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Email</p>
            <a className='font-medium' href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}
        {phone && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Phone</p>
            <p className='font-medium'>{phone}</p>
          </div>
        )}
        {address && (
          <div className='px-2 py-3 flex items-center justify-between'>
            <p className='mr-2'>Address</p>
            <p className='font-medium truncate'>{address}</p>
          </div>
        )}
        {description && (
          <div className='px-2 py-3'>
            <p className='mb-2 font-medium'>About Partner</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default PartnerInfo

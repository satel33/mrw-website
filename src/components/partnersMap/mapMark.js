import { useState } from 'react'
import Link from 'next/link'
import { Marker } from 'react-simple-maps'

// Sanity
import { urlFor } from '../../../lib/sanity'

const MapMark = ({ partner }) => {
  const [visible, setVisible] = useState(false)

  return (
    <Marker
      key={partner.name}
      coordinates={[partner.geolocation.lng, partner.geolocation.lat]}
    >
      <Link href={`/partners/${partner?.slug?.current}`}>
        <a
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <circle r={2} fill='red' />
          {visible && (
            <image href={urlFor(partner?.logo).url()} height='40' width='40' />
          )}
        </a>
      </Link>
    </Marker>
  )
}

export default MapMark

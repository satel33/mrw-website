import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'
import { geoPatterson } from 'd3-geo-projection'

// Components
const MapMark = dynamic(() => import('./mapMark'), { ssr: false })
const Controls = dynamic(() => import('./controls'), { ssr: false })

let projection = geoPatterson()

const Map = ({ data }) => {
  const [position, setPosition] = useState({ coordinates: [0, -10], zoom: 1 })
  const [area, setArea] = useState()
  const [markers, setMarkers] = useState([])

  const handleArea = (cords) => {
    let val = {
      continent: cords.properties.CONTINENT,
      country: cords.properties.NAME,
      country_long_name: cords.properties.NAME_LONG,
    }

    setArea(val)
  }

  useEffect(() => {
    if (area) {
      setMarkers(() => {
        return data.filter((partner) => {
          return partner.locations.some((location) => {
            return (
              (location.country === area.country &&
                location.continent === area.continent) ||
              location.country === area.country_long_name
            )
          })
        })
      })
    }
  }, [area])

  const areaColor = (cords) => {
    let isMatch = data.filter((partner) => {
      return partner.locations.some((location) => {
        return (
          (location.country === cords.properties.NAME &&
            location.continent === cords.properties.CONTINENT) ||
          location.country === cords.properties.NAME_LONG
        )
      })
    })

    if (isMatch.length > 0) {
      return '#3E92CC'
    } else {
      return 'black'
    }
  }

  function handleZoomIn() {
    if (position.zoom >= 4) return
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.2 }))
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.2 }))
  }

  function handleMoveEnd(position) {
    setPosition(position)
  }

  return (
    <div className='relative '>
      <Controls handleZoomOut={handleZoomOut} handleZoomIn={handleZoomIn} />
      <ComposableMap projection={projection}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={1.3}
        >
          <Geographies geography='https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleArea(geo)}
                  fill={areaColor(geo)}
                />
              ))
            }
          </Geographies>
          {markers.length &&
            markers.map((partner) => (
              <>
                <MapMark partner={partner} key={partner.name} />
              </>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default Map

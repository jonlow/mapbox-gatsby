import Layout from '../components/layout'
import '../styles/mapbox.css'
import mapboxgl from 'mapbox-gl'
import React from 'react'

class IndexPage extends React.Component {
  createMap() {
    const zoom = 12
    const iconSize = 0.5
    const coordinates = [13.404954, 52.520007]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: zoom,
    })
    map.scrollZoom.disable()

    map.on('load', () => {
      map.loadImage('/pin.png', (error, image) => {
        if (error) {
          throw error
        }
        map.addImage('pin', image)
        map.addLayer({
          id: 'points',
          layout: {
            'icon-image': 'pin',
            'icon-size': iconSize,
          },
          source: {
            data: {
              features: [
                {
                  geometry: {
                    coordinates: coordinates,
                    type: 'Point',
                  },
                  type: 'Feature',
                },
              ],
              type: 'FeatureCollection',
            },
            type: 'geojson',
          },
          type: 'symbol',
        })
      })
    })
  }

  componentDidMount() {
    mapboxgl.accessToken ='pk.eyJ1Ijoiam9ubG93IiwiYSI6ImNqcmlqcmJyNTAybWw0NHJ2c3RnMms2M2QifQ.uz4EWe8I6iW4l64hxyRvDQ'
    this.createMap()
  }

  render() {
    return (
      <Layout>

        <h1>My Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa, voluptas at hic quos obcaecati recusandae accusamus nemo doloribus possimus mollitia aliquam quam saepe. Praesentium excepturi nostrum voluptatem explicabo cum.
        </p>
        <div id={'map'} style={{width: '100%', height: 400}}/>
      </Layout>
    )
  }
}

export default IndexPage

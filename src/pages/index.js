import Layout from '../components/layout'
import '../styles/mapbox.css'
import mapboxgl from 'mapbox-gl'
import React from 'react'
import stores from '../data/stores'

class IndexPage extends React.Component {
  createMap() {
    const zoom = 12
    const coordinates = [-77.034084, 38.909671]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: zoom,
    })

    map.on('load', () => {
      console.log(stores)
      map.addLayer({
        id: 'locations',
        type: 'symbol',
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: 'geojson',
          data: stores,
        },
        layout: {
          'icon-image': 'rocket-15',
          'icon-allow-overlap': true,
        },
      })
    })
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibGlwaXN3aXJlIiwiYSI6ImNqa2JmYzQxazB3dngza3BkajVlY2FnMzkifQ.tHrRXd2rw3zorHY3YqUhBA'
    this.createMap()
  }

  render() {
    return (
      <Layout>
        <h1>My Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa,
          voluptas at hic quos obcaecati recusandae accusamus nemo doloribus
          possimus mollitia aliquam quam saepe. Praesentium excepturi nostrum
          voluptatem explicabo cum.
        </p>
        <div id={'map'} style={{ width: '100%', height: 400 }} />
      </Layout>
    )
  }
}

export default IndexPage



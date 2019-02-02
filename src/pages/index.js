/* global mapboxgl */

import Layout from '../components/layout'
import '../styles/mapbox.css'
import React from 'react'
import stores from '../data/stores'
import Helmet from 'react-helmet'
import LoadExternalScript from '../components/LoadExternalScript'

class IndexPage extends React.Component {
  createMap() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ubG93IiwiYSI6ImNqcmlqcmJyNTAybWw0NHJ2c3RnMms2M2QifQ.uz4EWe8I6iW4l64hxyRvDQ'
    const zoom = 12
    const coordinates = [-77.034084, 38.909671]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/jonlow/cjrilx4w69gam2srvplzqbu9g',
      zoom: zoom,
    })

    map.on('load', () => {
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



  render() {
    return (
      <Layout>
        <Helmet>
          <link rel="dns-prefetch" href="//api.tiles.mapbox.com/" />
          <link rel="dns-prefetch" href="//api.mapbox.com" />
          <link rel="dns-prefetch" href="//events.mapbox.com" />
        </Helmet>
        <LoadExternalScript
              src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.js"
              id="example"
              onLoad={() => this.createMap()}
         />

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



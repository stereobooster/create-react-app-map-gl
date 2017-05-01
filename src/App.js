import React, { Component } from 'react'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-dev';

// do not use import MapGL from 'react-map-gl/dist-es6/index.js'
// because this is Webpack 1
import MapGL from 'react-map-gl'

// import MapGL from 'react-map-gl/src/index.js'
// import MapGL from 'mapbox-gl/dist/mapbox-gl';
// import { default as Marker } from './components/Marker';

//   <Marker
//     latitude={37.7577}
//     longitude={-122.4376}
//   />

// <MapGL
//   width={400}
//   height={400}
//   latitude={37.7577}
//   longitude={-122.4376}
//   zoom={8}
//   onChangeViewport={viewport => {
//     // const {latitude, longitude, zoom} = viewport;
//     // Optionally call `setState` and use the state to update the map.
//   }}
// >
// </MapGL>

class App extends Component {
  render() {
    return (
      <div>hello world</div>
    );
  }
}

export default App;

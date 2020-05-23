import React from 'react';
import styled from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose"

const Container = styled.div`

`;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ lat, lng}) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat, lng, }}
    options={{ mapTypeControl: false, streetViewControl: false }}
  >
    <Marker position={{ lat, lng, }} />
  </GoogleMap>
)

export default Map;

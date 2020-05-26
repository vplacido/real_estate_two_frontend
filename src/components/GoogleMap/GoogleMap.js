import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import Marker from './Marker'
import fetch from 'isomorphic-fetch'

const AirbnbMap = withGoogleMap(props => (
  
  //google map api key AIzaSyAJaSfMDa9BKofZ_yKgbGY2kWdp3BLlWmU

  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.handleMapChanged}
    onDragEnd={props.handleMapChanged}
    onBoundsChanged={props.handleMapFullyLoaded}
    // defaultCenter={props.center}
    defaultCenter={{lat: 38.9295607, lng: -77.1013326}}
    defaultZoom={props.zoom}>
    
    {console.log('props are: ', props)}
    {props.listings.length > 0 && props.listings.map(listing => (
    
      <Marker key={`listing${listing.id}`}
                   id={listing.id}
                   lat={listing.lat}
                   lng={listing.lng}
                   description={listing.description}
                   title={listing.title}
                   price={listing.price} />
    ))
    }
  </GoogleMap>
  ))


class Map extends React.Component {
  constructor(props) {
    super(props)
    
    this.xMapBounds = { min: null, max: null }
    this.yMapBounds = { min: null, max: null }
    
    this.mapFullyLoaded = false
    this.zoom = 11
    
    this.state = {
      listings: [],
      lat: 18.0515918,
      lng: -74.9357531
    }
  }
  
  handleMapChanged() {
    this.getMapBounds()
    this.setMapCenterPoint()
    this.fetchPlacesFromApi()
  }
  
  handleMapMounted(map) {
    this.map = map
  }
  
  handleMapFullyLoaded() {
    if (this.mapFullyLoaded)
      return
    this.mapFullyLoaded = true
    this.handleMapChanged()
  }
  
  setMapCenterPoint() {
    this.setState({
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    })
  }
  
  fetchPlacesFromApi() {
    this.setState({listings: []})
    const API_URL = "http://localhost:3000/api/listings"

    fetch(API_URL)
      .then(resp => resp.json())
      .then(resp => this.setState({listings: resp}))
  }
 
  getMapBounds() {
    var mapBounds = this.map.getBounds()
    var xMapBounds = mapBounds.Ua
    var yMapBounds = mapBounds.Ya
    // debugger
    this.xMapBounds.min = xMapBounds.i
    this.xMapBounds.max = xMapBounds.j
 
    this.yMapBounds.min = yMapBounds.i
    this.yMapBounds.max = yMapBounds.j
  }
  
  
  render() {
    const { lat, lng, listings } = this.state
    
    return (
      <div style={{width: `600px`, height: `600px`}}>
        {/*<ul>
          <li>lng: {lng}</li>
          <li>lat: {lat}</li>
          <li>xMapBounds.min: {this.xMapBounds.min}</li>
          <li>xMapBounds.max: {this.xMapBounds.max}</li>
          <li>yMapBounds.min: {this.yMapBounds.min}</li>
          <li>yMapBounds.max: {this.yMapBounds.max}</li>
        </ul>*/}
        <AirbnbMap
          onMapMounted={this.handleMapMounted.bind(this)}
          handleMapChanged={this.handleMapChanged.bind(this)}
          handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          listings={listings}
          />
      </div>
      )
  }
}

export default Map
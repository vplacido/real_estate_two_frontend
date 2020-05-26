import React from 'react'
import { InfoWindow } from 'react-google-maps'
import { Link } from 'react-router-dom'
 
class PlaceInfoWindow extends React.Component {
  render() {
    const { description, title, price, id } = this.props
    
    return (
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div className="windoInfo">
          <Link to={`/listings/${id}`}>
          <h1>{title}</h1></Link>
          <p>{description}</p>
          <span>${price} Per Day</span>
        </div>
      </InfoWindow>
      )    
    
  }
  
}

export default PlaceInfoWindow
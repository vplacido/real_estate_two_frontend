import React from 'react'
import { Link } from 'react-router-dom'
// import ListingPageContainer from './item/ListingPageContainer'


class ListingsListItem extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      count: 0
    }
    
    //this.handleLike = this.handleLike.bind(this)
  }
  
  handleLike = () => {
    let count = this.state.count
    this.setState({
      count: count += 1
    })
  }
  
  callApi = () => {
    const API_URL = "http://localhost:3000/api"
    
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
  console.log("a")
   fetch(`${API_URL}/listfdsfdfsings`, {
      headers,
    method: 'GET'
    })
    .then(resp => {
      
      if(resp.ok) {
        console.log('b')
        return resp.json()
      } else {
        throw new Error(resp.statusText)
      }
      
      
    })
    .then(listings => console.log('c', listings))
    .catch(err => console.log('d', err))
    console.log('e')
  }

  // Styling for each img item

  render() {
    const {listing} = this.props
    let img = listing.img_url
  const imgStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${img})`,
    zIndex: 10
  }
  

  return (
  <li>

    <Link to={`/listings/${listing.id}`}>
    <div className='listing-list-img-box' >
      <div className='listing-list-img' style={imgStyle}></div>
    </div>
    
    <div className='listing-list-item-details'>
      <div className='listing-list-item-title'>
        <span><strong>${listing.price} </strong></span>
        <span><strong>{listing.title}</strong></span>
      </div>
      
      <div className='listing-list-item-desc'>
        <span>{listing.prop_type}</span>
        <span aria-hidden="true"> · </span>
        <span>{listing.beds} { listing.beds === 1 ? "bed" : "beds" }</span>
      </div>
      
      <div>
        <span className="review-count">{ ` ${listing.reviews.length} ` + (listing.reviews.length === 1 ? 'review' : 'reviews') }</span>
      </div>

      <div>
        {this.state.count + `  `}
        <button onClick={this.handleLike}>Likes</button>
        {/* <button onClick={this.callApi}>Call Api</button> */}
        
      </div>
    </div>
    </Link>
  </li>
  )
}
}
export default ListingsListItem
import React from 'react'
import ListingsContainer from './listings/ListingContainer'
import Map from './GoogleMap/GoogleMap'


const Home = (props) => {
  return (
    <div className='jumbotron'>
      <div className='header-greeting'>
        <h1><strong>Realt</strong> <br/>Rent unique homes across the world.</h1>
      </div>
      <div className='col-md-4 map-search-container'>
        <Map className='col-md-4'/>
      </div>
      <div className='col-md-8'>
        <ListingsContainer className='col-md-8'/>
      </div>

    </div>
    )
}

export default Home

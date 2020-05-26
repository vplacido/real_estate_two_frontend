import React from 'react'

class TripsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            listings: [],
            
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/api/bookings")
        .then(resp => resp.json())
        // .then(json => console.log(json))
        .then(json => this.setState({
            trips: json.filter(trip => trip.user_id === 84)
        }))
        fetch("http://localhost:3000/api/listings")
        .then(resp => resp.json())
        .then(json => this.setState({
            listings: json
        }))
    }

    renderTrips() {
        return this.state.trips.map(trip => {
            return <li>
                    <div className="listing-list-item-details">
                        {this.showListing(trip.listing_id)}
                        <p>Check in: {trip.check_in.substring(0,10)}</p>
                        <p>Check Out: {trip.check_out.substring(0,10)}</p>
                        <button onClick={(e) => this.deleteTrip(e)} value={trip.id}>Delete</button>
                    </div>
                </li>
        })
    }

    showListing(listingID) {
        let listings = this.state.listings
        listings = listings.filter(l => l.id === listingID)
        // debugger
        if (listings.length === 1) {return (
            <div><p><b>{listings[0].title}</b></p>
            <p>${listings[0].price}</p></div>
            
        )}
        
    }

    deleteTrip(e) {
        e.preventDefault()
        // debugger
        fetch(`http://localhost:3000/api/bookings/${e.target.value}`, {
            method: "DELETE"
        }).then(resp => resp.json())
        this.setState({trips: this.state.trips.filter(t => t.id != e.target.value)})
        this.renderTrips()
        window.alert("Are you sure you want to delete your trip.")
    }

    render() {
        return (
            // <div className="listing-list">
            <div>
                <h1>My Trips</h1>
                <ul className="tripContainer">
                    {this.renderTrips()}
                </ul>
            </div>
        )
    }
}

export default TripsContainer
import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginFormContainer from './components/LoginInFormContainer'
import ListingPageContainer from './components/listings/item/ListingPage'
import ListingsContainer from './components/listings/ListingContainer'
import ListingsNewForm from './components/listings/NewListingForm'
import AboutPage from './components/About'
import NavBar from './components/NavBar/NavBar'
import SignUpFormContainer from './components/SignUpFormContainer'
import TripsContainer from './components/TripsContainer'
// import ProfilePageContainer from './components/ProfilePageContainer'
import 'bootswatch/dist/lumen/bootstrap.min.css'

class App extends Component {
  render() {
    
    return (
      <div className="App" id='app'>
        <header className="App-header">
          <NavBar />
        </header>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/listings' component={ListingsContainer} />
            <Route exact path='/listings/new' component={ListingsNewForm} />
            <Route path='/listings/:listingId' component={ListingPageContainer} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/login' component={LoginFormContainer}/>
            <Route exact path='/signup' component={SignUpFormContainer} />
            <Route exact path='/trips' component={TripsContainer} />
            {/* <Route exact path='/profile' component={ProfilePageContainer} /> */}
            {/*<LoginFormContainer />*/}
          </Switch>
      
        </div>


      </div>
    );
  }
}

export default App;

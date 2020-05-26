import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
// import NavBar as NavBars from 'react-bootstrap/NavBar'
// import img from '../../assets/img/abnb-logo.png'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto" id='nav-left'>
            <li className="nav-item active" id="title">
              <Link to='/' className='nav-link'>Realt</Link>
            </li>
            {/* <li className="nav-item active">
              <Link to='/profile' className='nav-link'>Profile</Link>
            </li> */}
            <li className="nav-item active">
              <Link to='/trips' className='nav-link'>My Trips</Link>
            </li>
          </ul>
            {/* <ul className="navbar-nav mr-auto" id='nav-middle'>
                <li className="nav-item">
                      <SearchBar />
                </li>  
            </ul>  */}

          <ul className="navbar-nav mr-auto" id='nav-right'>
            <li className="nav-item">
              <Link to='/listings' className='nav-link'>Properties</Link>
            </li>
            <li className="nav-item">
              <Link to='/listings/new'className="nav-link">Become a host</Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/about' className='nav-link'>About</Link>
            </li> */}
            <li className="nav-item">
                <Link to='/login' className='nav-link'>Login</Link>
            </li>
            {/* <li className="nav-item">
                <Link to='/signup' className='nav-link'>Sign Up</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default NavBar
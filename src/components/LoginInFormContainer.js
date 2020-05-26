import React from 'react'
import fetch from 'isomorphic-fetch'

class LoginFormContainer extends React.Component {

// # This successfully submits a POST request to the server and returns a 201 status code.
login () {
    const email = document.getElementById('email').value
    const password = document.getElementById("password").value
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    // change to localhostusers
    fetch("http://localhost:3000/api/user_token", {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
    })
    .then(function (result) {
        console.log(result)
        // debugger
        // jwt is undefined though...
        localStorage.setItem("jwt", result.jwt)
      })
      window.alert("Login Success!")
    }
  render() {
    return (
      <div>
      <h1 className="loginHeader">
          Login
        </h1>
        <div className="loginForm">
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
          </div>
        <br />
      </div>
      )
  }
}

export default LoginFormContainer

// Hey Jordan, this is Valentin with an updated description for my project Realt for the showcase flyer.
// A full-stack web app designed to allow users to browse, create, and book rental properties around the world.
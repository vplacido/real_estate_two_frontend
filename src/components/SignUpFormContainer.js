import React from 'react'
import fetch from 'isomorphic-fetch'

class SignUpFormContainer extends React.Component {

// # This successfully submits a POST request to the server and returns a 201 status code.
login () {
    const email = document.getElementById('email').value
    const password = document.getElementById("password").value
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    // change to localhostusers
    fetch("http://localhost:3000/api/users", {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
    })
    .then(function (result) {
        console.log(result)
        debugger
        // jwt is undefined though...
        localStorage.setItem("jwt", result.jwt)
      })
    }
  render() {
    return (
      <div>
      <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Create an Account
        </h1>
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
        <br />
      </div>
      )
  }
}

export default SignUpFormContainer
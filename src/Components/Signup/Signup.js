import React from 'react'
import './Signup.css'
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signUp">
    <Link to="/">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
    </Link>
    <div className="signup__container">
      <h1>Sign Up</h1>
      <form >
        <input
          required
          type="email"
      

          placeholder="Email"
        />
        <input
          required
          type="password"
         
          
          placeholder="Password"
        />
        <input
          required
          type="password"
         
       
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/signin">
    
        &nbsp;Sign In
      </Link>
    </div>
  </div>
  )
}

export default Signup
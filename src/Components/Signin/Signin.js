import React ,{useState} from 'react'
import { Link } from "react-router-dom";
import './Signin.css'
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signIn">
    <Link to="/">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
    </Link>
    <div className="signin__container">
      <h1>Sign In</h1>
      <form >
        <input
          value={email}
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
      <h3 className="signin__google" >
        Login with&nbsp;
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google-logo"
        />
      </h3>
      <h3>
        New to Netflix? <Link to="/signup">Sign up now.</Link>
      </h3>
      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a
        bot. Learn more.
      </p>
    </div>
  </div>
  )
}

export default Signin
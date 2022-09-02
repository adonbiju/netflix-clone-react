import React ,{useState} from 'react'
import { Link ,useNavigate } from "react-router-dom";
import './Signin.css'
import { auth } from '../../Firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";


function Signin() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  
  const handlesubmit=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword (auth,email,password).then((authUser)=>{
        navigate('/')
    }).catch((error)=>{
      alert(error.message);
    })
  }
  return (
    <div className="signIn">
    <Link to="/">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
    </Link>
    <div className="signin__container">
      <h1>Sign In</h1>
      <form onSubmit={handlesubmit} >
        <input
          value={email}
          required
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          required
          type="password"
          onChange={(e) => setpassword(e.target.value)}
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
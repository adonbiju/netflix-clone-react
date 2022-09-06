import React,{useState} from 'react'
import './Signup.css'
import { Link,useNavigate } from "react-router-dom";
import  {auth}  from '../../Firebase/config';
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { doc,setDoc} from "firebase/firestore"; 
import db from '../../Firebase/config'
import Loading  from '../Loading/Loading'

function Signup() {
  const [loading, setLoading] = useState(false);
  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  
  const navigate = useNavigate();
  
  const handlesubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
     
      updateProfile(auth.currentUser, {displayName:username}).then(()=>{
        setDoc(doc(db, "users", username), {
          id:authUser.user.uid,
          username:username,
        })
      
      }).then(()=>{
        setLoading(false)
         navigate('/')
      })
    }).catch((error)=>{
      setLoading(false)
      alert(error.message);
    })
  }

  //Loader
  if (loading) {
      return (
        <Loading/>
      );
    } else {
  return (
    <div className="signUp">
    <Link to="/">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
    </Link>
    <div className="signup__container">
      <h1>Sign Up</h1>
      <form onSubmit={handlesubmit}>
        <input
          required
          type="text"
           value={username}
            onChange={(e)=>setusername(e.target.value)}
          placeholder="Username"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          placeholder="Email Id"
        />
        <input
          required
          type="password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          placeholder="Password"
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
}

export default Signup
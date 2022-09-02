import React,{useContext} from 'react'
import "./Navbar.css"
import { AuthContext } from '../../Store/FirebaseContext'
import {  signOut } from "firebase/auth";
import {auth} from '../../Firebase/config'
function Navbar() {
  const  {user} = useContext(AuthContext)
  const handleClick=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("Sign-out successfu")
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
  }
  return (
    <header className="black">
    <div className="header--logo">
      <a href="/">
        <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
      </a>  
    </div>
  
    <div className="loginPage">
          <span>{user? `${user.displayName}`:'Login'}</span>
          <hr />
      </div>
      {user && <span onClick={handleClick} className="logoutlink">Logout</span>}
    
    <div className="header--user">
      <a href="/">
        <img alt="Usuário" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"/>
      </a>
    </div>
</header>
  )
}

export default Navbar
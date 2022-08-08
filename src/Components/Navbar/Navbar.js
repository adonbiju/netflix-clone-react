import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <header className="black">
    <div className="header--logo">
      <a href="/">
        <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
      </a>  
    </div>
    <div className="header--user">
      <a href="/">
        <img alt="Usuário" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"/>
      </a>
    </div>
</header>
  )
}

export default Navbar
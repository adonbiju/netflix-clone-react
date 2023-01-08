import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AuthContext } from "../../Store/FirebaseContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/config";

function Navbar({ black }) {
  const [dropdown, setDropdown] = useState(false);
  const { user } = useContext(AuthContext);
  const handleSignoutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };
  const handleNotImplementedFunctions=()=>{
    alert("This function will implemente soon!!!")
  }
  return (
    <header className={black ? "black" : ""}>
      <div className="nav__contents1">
      <a href="/">
        <img
          src="/images/netflixLogo.png"
          alt=""
          className="nav__logo"
        /></a>
        <ul className="nav__contents1-navItems">
          <li style={{ fontWeight: "bolder" }}>Home</li>
          <li  onClick={handleNotImplementedFunctions}>TV Shows</li>
          <li  onClick={handleNotImplementedFunctions}>Movies</li>
          <li  onClick={handleNotImplementedFunctions}>News & Popular</li>
          <li  onClick={handleNotImplementedFunctions}>My List</li>
        </ul>
      </div>

      <div className="nav__contents2">
        <div className="nav__contents2-profile" onClick={handleDropdown}>
          <img
            src="/images/Profiles/Avatar.png"
            alt=""
            className="nav__avatar"
          />

          {dropdown && (
            <div
              className="nav__account-dropdown"
              onMouseLeave={handleDropdown}
            >
              <ul className="nav__dropdown-profiles">
                <li className="nav__dropdown-profile">
                  <img
                    src="/images/Profiles/user1.png"
                    alt=""
                  />
                  <p>{user ? `${user.displayName}` : "Login"}</p>
                </li>
                <li className="nav__dropdown-profile">
                  <img
                    src="/images/Profiles/user2.png"
                    alt=""
                  />
                  <p onClick={handleNotImplementedFunctions}>User 2</p>
                </li>
                <li className="nav__dropdown-profile">
                  <img
                     src="/images/Profiles/user3.png"
                    alt=""
                  />
                  <p onClick={handleNotImplementedFunctions}>User 3</p>
                </li>
                <li className="nav__dropdown-profile">
                  <img
                     src="/images/Profiles/user4.png"
                    alt=""
                  />
                  <p onClick={handleNotImplementedFunctions}>User 4</p>
                </li>
              </ul>
              <div className="nav__dropdown-manage">
                <p onClick={handleNotImplementedFunctions}>Manage Profiles</p>
              </div>
              <ul className="nav__dropdown-account">
                <li onClick={handleNotImplementedFunctions}>Account</li>
                <li onClick={handleNotImplementedFunctions}>Help center</li>
                <li onClick={handleSignoutClick}>Sign out of Netflix</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

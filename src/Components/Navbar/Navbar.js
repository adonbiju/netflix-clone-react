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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
          className="nav__logo"
        /></a>
        <ul className="nav__contents1-navItems">
          <li style={{ fontWeight: "bolder" }}>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="nav__contents2">
        <div className="nav__contents2-profile" onClick={handleDropdown}>
          <img
            src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
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
                    src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeeinKf4qjR-VAaPOviRjcglAoSBnJKs2fY1tfA0nEj-xw-O_KK3gcSUYa2BOh9hE6ThxPEvcS4djBufuLM2ZV0.png?r=535"
                    alt=""
                  />
                  <p>{user ? `${user.displayName}` : "Login"}</p>
                </li>
                <li className="nav__dropdown-profile">
                  <img
                    src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZIK6jqsRHlhlEmDoON8jYhl3g9VML7tmyNKM-HIpNkeAJJRKEyUVCig6fqILzcM_dspEFHOczXgfQgtHCGxiUI.png?r=a29"
                    alt=""
                  />
                  <p onClick={handleNotImplementedFunctions}>User 2</p>
                </li>
                <li className="nav__dropdown-profile">
                  <img
                    src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
                    alt=""
                  />
                  <p onClick={handleNotImplementedFunctions}>User 3</p>
                </li>
                <li className="nav__dropdown-profile">
                  <img
                    src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeWhh90Jhr88FfkPPsQzlkfArIFv6ztxOLHR3gweFd7iqahxtOH8Cqw7GuSfQJBcxkbMkINDQDx1oFQw3c2gPH0.png?r=cea"
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

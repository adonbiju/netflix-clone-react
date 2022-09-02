import { BrowserRouter,Routes,Route,  Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import StartingPage from "./Pages/StartingPage";
import "./App.css";

import { useContext, useEffect } from 'react';

import { AuthContext } from './Store/FirebaseContext';

import { onAuthStateChanged } from "firebase/auth";
import {auth} from './Firebase/config'

function App() {
 
 const  {user,setUser} = useContext(AuthContext)

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  
  })
},[])

  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={!user? <Navigate to="/Starting"  /> :<Home />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/Signup"  element={<SignupPage/>}  />
        <Route path="/Starting" element={<StartingPage />} />
    </Routes>
  </BrowserRouter>
 
  )
}

export default App;

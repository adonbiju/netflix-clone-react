import { BrowserRouter,Routes,Route,  Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import StartingPage from "./Pages/StartingPage";
import PageNotFound404 from "./Components/PageNotFound404/PageNotFound404";
import "./App.css";
import Loading from "./Components/Loading/Loading";

import { useContext, useEffect,useState} from 'react';

import { AuthContext } from './Store/FirebaseContext';

import { onAuthStateChanged } from "firebase/auth";
import {auth} from './Firebase/config'

function App() {

const [loading, setLoading] = useState(false);

const  {user,setUser} = useContext(AuthContext)
useEffect(() => {
  setLoading(true)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false)
      setUser(user)
    } else {
      setLoading(false)
      setUser(null)
    }
  
  })
},[])

 //Loader
 if (loading) {
  return (
    <Loading/>
  );
}else{
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={!user? <Navigate to="/Starting"  /> :<Home/>} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/Signup"  element={<SignupPage/>}  />
        <Route path="/Starting" element={<StartingPage />} />
        <Route path="*" element={<PageNotFound404/>}/>
    </Routes>
  </BrowserRouter>
 
  )
}
}

export default App;

import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import StartingPage from "./Pages/StartingPage";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Starting" element={<StartingPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

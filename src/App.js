import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/Signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

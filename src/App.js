import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import SigninPage from "./Pages/SigninPage";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SigninPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

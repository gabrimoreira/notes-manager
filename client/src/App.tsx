import { Button } from "@/components/ui/button";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route index path = "/" element ={<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/sign-up" element = {<SignUp/>}/>
      </Routes>
    </Router>


  )
}

export default App

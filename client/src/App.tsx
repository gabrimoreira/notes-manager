import { Button } from "@/components/ui/button";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
import UserHome from "./pages/UserHome";
import Layout from "./layouts/Layout";


function App() {
  return (
    <Router>
      
      <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/home" element = {<UserHome/>}/>

      </Routes>

    </Router>


  )
}

export default App

import { Button } from "@/components/ui/button"
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route index path = "/" element ={<Home/>}/>
      </Routes>
    </Router>


  )
}

export default App

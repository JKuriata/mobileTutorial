import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { NavBar } from "./Components/NavBar/NavBar"

function App() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </Router>
  )
}

export default App

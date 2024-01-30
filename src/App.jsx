

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { IndexExp } from "./pages/IndexExp"
import AboutUs from './pages/AboutUs'
import WhatWeDo from './pages/WhatWeDo'
import WhatWeOffer from './pages/WhatWeOffer'
import { Navbar } from "./components/ui/Navbar"
import HomeTraining from "./pages/HomeTraining"
import Footer from "./components/ui/Footer"




function App() {
  return (
    <>

    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<IndexExp/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/whatwedo" element={<WhatWeDo/>}/>
          <Route path="/speechandlanguage" element={<WhatWeOffer/>}/>
          <Route path="/hometraining" element={<HomeTraining/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App

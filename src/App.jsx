

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { IndexExp } from "./pages/IndexExp"
import AboutUs from './pages/AboutUs'
import WhatWeDo from './pages/WhatWeDo'
import WhatWeOffer from './pages/WhatWeOffer'
import { Navbar } from "./components/ui/Navbar"
import Speech from "./pages/Speech"
import HomeTraining from "./pages/HomeTraining"




function App() {
  return (
    <>

    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<IndexExp/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/whatwedo" element={<WhatWeDo/>}/>
        <Route path="/whatweoffer" element={<WhatWeOffer/>}/>
        <Route path="/speechandlanguage" element={<Speech/>}/>
        <Route path="/hometraining" element={<HomeTraining/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexExp } from "./pages/IndexExp";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import WhatWeOffer from "./pages/WhatWeOffer";
import { Navbar } from "./components/ui/Navbar";
import HomeTraining from "./pages/HomeTraining";
import Footer from "./components/ui/Footer";
import OurApproach from "./pages/OurApproach";
import ContactUs from "./pages/ContactUs";
import UserDetail from "./pages/UserDetail";
import SignIn from "./components/auth/SignIn";
import { AuthProvider } from "../src/contexts/UserAuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<IndexExp />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/ourapproach" element={<OurApproach />} />
            <Route path="/speechandlanguage" element={<WhatWeOffer />} />
            <Route path="/hometraining" element={<HomeTraining />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/user-detail" element={<UserDetail />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

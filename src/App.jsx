import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import Team from "./pages/Team";
import Patients from "./pages/Patients";
import Services from "./pages/Services";
import { Navbar } from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import OurApproach from "./pages/OurApproach";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Team />} />
            <Route path="/whatwedo" element={<Patients />} />
            <Route path="/ourapproach" element={<OurApproach />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/speechandlanguage" element={<Services />} />
            <Route path="/hometraining" element={<Services />} /> */}
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

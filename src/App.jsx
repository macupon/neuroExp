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
import SignIn from "./components/auth/SignIn";
import { AuthProvider } from "../src/contexts/UserAuthContext";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import UserOnBoarding from "./pages/user-page/UserOnBoarding";

function App() {
  return (
    <>
      <AuthProvider>
          <UserProvider>
              <Router>
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<IndexExp />} />
                      <Route path="/aboutus" element={<AboutUs />} />
                      <Route path="/whatwedo" element={<WhatWeDo />} />
                      <Route path="/ourapproach" element={<OurApproach />} />
                      <Route
                        path="/speechandlanguage"
                        element={<WhatWeOffer />}
                      />
                      <Route path="/hometraining" element={<HomeTraining />} />
                      <Route path="/contactus" element={<ContactUs />} />
                      <Route path="/user-view" element={<UserOnBoarding />} />
                      <Route path="/signin" element={<SignIn />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </Router>
              <ToastContainer position="bottom-right" autoClose={3000} />
          </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;

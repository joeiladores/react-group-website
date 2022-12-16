import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nopage from "./Nopage";
import Footer from "./Footer";

function App() {



  return (
    <div>
      <Navbar />
      <div className="page-padding">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

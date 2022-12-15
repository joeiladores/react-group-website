import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./components/Footer";
import DataFetching from "./components/DataFetching";
// import Layout from "./Layout";

function App() {
  return (
    <div>
     
      <Navbar />    
      
      <div className="page-padding">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>        
      </div>

      {/* FOOTER HERE */}
      <Footer />

    </div>
  );
}

export default App;

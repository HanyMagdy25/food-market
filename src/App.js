import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Header from "./components/Header/Header";
// import CardsSm from "./components/CardsSm/CardsSm";
// import BestProducts from "./components/BestProducts/BestProducts";
// import Recent from "./components/Recent/Recent";
// import { Payment } from "./components/Payment/Payment";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Inside from "./Pages/Inside";
import { useEffect } from "react";

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-cloud-test" element={<Home />} />
          <Route path="/inside/:id" element={<Inside />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

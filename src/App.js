import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Favourite from "./Pages/Favourite/Favourite";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Confirmation from "./Pages/Confirmation/Confirmation";

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <GlobalProvider >
      <div className="App">
      <Router>
      <ScrollToTop />
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-cloud-test" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </GlobalProvider>
    
  );
}

export default App;

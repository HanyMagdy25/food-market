import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import CardsSm from "./components/CardsSm/CardsSm";
import BestProducts from "./components/BestProducts/BestProducts";
import Recent from "./components/Recent/Recent";
import { Payment } from "./components/Payment/Payment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Navbar />
        <Header/>
        <CardsSm/>
        <BestProducts/>
        <Recent/>
        <Payment/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

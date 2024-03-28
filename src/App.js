import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Carousel1 from "./components/Carousel";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DivFlex from "./components/DivFlex";
import RowCol from "./components/RowCol";

import About from "./components/About";
import FranchiseEnquiry from "./components/FranchiseEnquiry";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CustomerInquiry from "./components/ContactUs";
import Menu from "./components/Menu/Menu";
// import function to register Swiper custom elements


const img1 = "logo.png";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cutomerInquiry" element={<CustomerInquiry />} />
          <Route path="/frenchiseInquiry" element={<FranchiseEnquiry />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

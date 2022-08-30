import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
// import Faq from "./components/Faq";
import Lost from "./components/Lost";
import AboutDetails from "./components/AboutDetails";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Navigate to="/"/>} />
        <Route path="/product/*" element={<Product/>}/>
        <Route path="/about/:id" element={<AboutDetails/>} />
        <Route path="*" element={<Lost/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

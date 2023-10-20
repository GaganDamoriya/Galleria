import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchpage from "./components/searchpage/Searchpage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="search/:query" element={<Searchpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

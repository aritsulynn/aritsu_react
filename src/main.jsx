import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import page and components
import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter basename="/aritsu_react">
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/aboutme" element={<Aboutme />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

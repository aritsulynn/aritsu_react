import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";

import Topping from "./components/Topping";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline, Button } from "@mui/material";

import { lightTheme, darkTheme } from "./theme/Theme";

import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("isDarkTheme", true);

  const toggleTheme = () => {
    setTheme(theme == true ? false : true);
  };

  return (
    <ThemeProvider
      theme={theme ? createTheme( responsiveFontSizes(darkTheme)) : createTheme(responsiveFontSizes(lightTheme))}
    >
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} themeNow={theme} />
      <Routes>
        <Route path="*" element={<Home toggleTheme={toggleTheme} />} />
        <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
      </Routes>
      <Footer themeNow={theme}/>
    </ThemeProvider>
  );
}

export default App;

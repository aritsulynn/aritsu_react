import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";

import Topping from "./components/Topping";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline, Button } from "@mui/material";

import { lightTheme, darkTheme } from "./theme/Theme";

import useLocalStorage from "use-local-storage";

import { BrowserRouter } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useLocalStorage("isDarkTheme", true);

  const toggleTheme = () => {
    setTheme(theme ? false : true);
  };

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={theme ? createTheme( responsiveFontSizes(darkTheme)) : createTheme(responsiveFontSizes(lightTheme))}
      >
        <CssBaseline />
        <Topping toggleTheme={toggleTheme} themeNow={theme} />
        <Routes>
          <Route path="*" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/aboutme" element={<Aboutme toggleTheme={toggleTheme} />} />
        </Routes>
        <Footer themeNow={theme}/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

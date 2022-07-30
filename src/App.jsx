import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";

import Topping from "./components/Topping";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";
import Sairahus2022 from "./pages/Sairahus2022";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline, Button } from "@mui/material";

import { lightTheme, darkTheme } from "./theme/Theme";

import useLocalStorage from "use-local-storage";

function App() {
  // const [theme, setTheme] = useLocalStorage("isDarkTheme", true);

  // const toggleTheme = () => {
  //   setTheme(theme == true ? false : true);
  // };

  return (
    // <ThemeProvider
    //   theme={theme ? createTheme( responsiveFontSizes(lightTheme)) : createTheme(responsiveFontSizes(lightTheme))}
    // >
    <ThemeProvider
      theme={createTheme( responsiveFontSizes(lightTheme))}
    >
      <CssBaseline />
      {/* <Topping toggleTheme={toggleTheme} themeNow={theme} /> */}
      <Routes>
        <Route path="*" element={<Sairahus2022 />} />
        {/* <Route path="*" element={<Home toggleTheme={toggleTheme} />} />
        <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
        <Route path="/aboutme" element={<Aboutme toggleTheme={toggleTheme} />} /> */}
        <Route path="/sairahus2022" element={<Sairahus2022 />} />
      </Routes>
      {/* <Footer themeNow={theme}/> */}
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import {
  CssBaseline,
  Box,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import ScrollButton from "./components/ScrollButton";
// import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RoutePages from "./components/RoutePages";

import { FaSun, FaRegMoon } from "react-icons/fa";

// import theme
import { lightTheme, darkTheme } from "./themes/themes";
import useLocalStorage from 'use-local-storage';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme", true);

  const changeTheme = () => {
    setIsDarkTheme(isDarkTheme === true ? false : true);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
      <CssBaseline />
      <Router>
        <NavBar check={isDarkTheme} onchange={changeTheme}/>
        <main>
          <RoutePages themes={isDarkTheme}/>
        </main>
      </Router>
      <Box>
        <ScrollButton themes={isDarkTheme}/>
        <Footer themes={isDarkTheme} />
      </Box>
    </ThemeProvider>
  );
}

export default App;

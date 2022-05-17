import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Typography,
  CssBaseline,
  Switch,
  Box,
  Container,
  AppBar,
  Grid,
  Toolbar,
} from "@material-ui/core";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";

// import pages
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import About from "./pages/About";

import React, { Component, useState } from "react";

// import components
import Footer from "./components/Footer";

import { FaSun, FaRegMoon } from "react-icons/fa";

// import theme
import { lightTheme, darkTheme } from "./themes/themes";

const useStyles = makeStyles(({
  disable: {
    color: "darkgray",
  },
}));
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const classes = useStyles();

  return (
    <ThemeProvider
      theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}
    >
      <CssBaseline />
      <Router>
        <AppBar position="relative" style={{ backgroundColor: "#222222" }}>
          <Toolbar>
            {/* whatever is on the right side */}
            <Box>
              <Typography variant="h6" style={{ color: "white" }}>
                Aritsu
              </Typography>
            </Box>
            <Box style={{ marginLeft: "auto" }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Link to="/">
                    <Typography style={{ color: "white" }}>
                      Home
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  {/* <Link to="/About"> */}
                  <Link to="#disable" className={classes.disable}>
                    <Typography>
                      About
                    </Typography>
                  </Link>
                </Grid>
                <Grid>
                  <Switch
                    icon={<FaSun />}
                    checkedIcon={<FaRegMoon />}
                    checked={isDarkTheme}
                    onChange={changeTheme}
                    color="default"
                  ></Switch>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <Box>
            <Routes>
              <Route path="*" element={<Notfound />} />
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Box>
        </main>
      </Router>
      <Box>
        <Footer themes={isDarkTheme ? "darkTheme" : "lightTheme"} />
      </Box>
    </ThemeProvider>
  );
}

export default App;

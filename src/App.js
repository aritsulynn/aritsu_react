import React from "react";
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
import AnimeSearch from "./pages/AnimeSearch";
import Anilist from "./pages/Anilist";
import UserAnime from "./pages/AniSearch";


import ScrollButton from "./components/ScrollButton";
// import components
import Footer from "./components/Footer";

import { FaSun, FaRegMoon } from "react-icons/fa";

// import theme
import { lightTheme, darkTheme } from "./themes/themes";
import useLocalStorage from 'use-local-storage';
const useStyles = makeStyles(({
  disable: {
    color: "darkgray",
  },
}));
function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("theme", true);

  const changeTheme = () => {
    setIsDarkTheme(isDarkTheme === true ? false : true);
    // setIsDarkTheme(!isDarkTheme);
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
              <Link to='/'><Typography variant="h6" style={{ color: "white" }}>
                Aritsu
              </Typography></Link>
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
                {/* <Grid item>
                  <Link to="/About">
                    <Typography>
                      About
                    </Typography>
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to="/AniSearch" style={{ color: "white" }}>
                    <Typography>
                      AniSearch
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
              <Route path="/Linktree" element={<Home />} />
              <Route path="/About" element={<About />} />
              {/* <Route path="/Anime" element={<Anime themes={isDarkTheme ? "darkTheme" : "lightTheme"}/>} /> */}
              <Route path="/Anilist" element={<Anilist />} /> {/* work in progress login*/}
              <Route path="/Anime" element={<AnimeSearch />} />
              <Route path="/AniSearch" element={<UserAnime themes={isDarkTheme ? "darkTheme" : "lightTheme"}/>} />
            </Routes>
          </Box>
        </main>
      </Router>
      <Box>
        <ScrollButton themes={isDarkTheme ? "darkTheme" : "lightTheme"}/>
        <Footer themes={isDarkTheme ? "darkTheme" : "lightTheme"} />
      </Box>
    </ThemeProvider>
  );
}

export default App;

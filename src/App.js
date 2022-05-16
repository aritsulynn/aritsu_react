import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Typography, CssBaseline, Switch } from "@material-ui/core";
import { ThemeProvider, createTheme  } from "@material-ui/core/styles";

// import pages
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import About from './pages/About';

import React, {Component, useState}  from "react";

// import components
import Footer from './components/Footer';

// import theme
import {lightTheme, darkTheme} from './themes/themes';
function App() {
  // const classes = useStyles();

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
    <Router>
      <CssBaseline />
        <div className="header">       
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              {/* <li>
                <Link to="/About" >About</Link>
              </li> */}
              <li>
                <Switch checked={isDarkTheme} onChange={changeTheme} color="default"></Switch>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </Router>
    <Footer themes={isDarkTheme ? "darkTheme" : "lightTheme"}/>
    </ThemeProvider>
  );
}

export default App;

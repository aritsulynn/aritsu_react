import { useState } from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Switch,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

import { BsSunFill, BsSun, AiOutlineMenu } from "react-icons/all";

export default function Topping(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar style={{ height: "23px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h3">ARITSU</Typography>
          </Link>
          <Box flexGrow={1} />
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleClick}
              sx={{ color: "white" }}
            >
              <AiOutlineMenu />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/aboutme">
                About me
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="https://anithai.netlify.app/"
                  style={{
                    textDecoration: "none",
                    color: props.themeNow ? "white" : "black",
                  }}
                >
                  AniThai
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/aboutme">
                <Button
                  style={{
                    fontSize: "16px",
                    color: props.themeNow ? "white" : "black",
                  }}
                  onClick={props.toggleTheme}
                >
                  {props.themeNow ? <BsSun /> : <BsSunFill />}
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button component={Link} to="/" style={{ color: "white" }}>
              Home
            </Button>
            <Button component={Link} to="/aboutme" style={{ color: "white" }}>
              About me
            </Button>
            <Button style={{ color: "white" }}>
              <a
                href="https://anithai.netlify.app/"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                AniThai
              </a>
            </Button>
            <Button
              style={{ fontSize: "16px", color: "white" }}
              onClick={props.toggleTheme}
            >
              {props.themeNow ? <BsSun /> : <BsSunFill />}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Switch,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { BsSunFill, BsSun } from "react-icons/bs";
export default function Topping(props) {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">Aritsu</Typography>
          </Link>
          <Box flexGrow={1} />
          <Button>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>
          <Button>
            <Link to="/Aboutme" style={{ textDecoration: "none", color: "white" }}>
              About me
            </Link>
          </Button>
          <Button
            style={{ fontSize: "16px" , color: "white" }}
            onClick={props.toggleTheme}
          >
            {props.themeNow ? <BsSun /> : <BsSunFill />}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

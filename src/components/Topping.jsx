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

import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
export default function Topping(props) {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">Aritsu</Typography>
          </Link>
          <Box flexGrow={1} />
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <a
            style={{ marginLeft: "10px", fontSize: "16px" }}
            onClick={props.toggleTheme}
          >
            {props.themeNow ? <BsLightbulb /> : <BsLightbulbFill />}
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

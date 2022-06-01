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
          <Button component={Link} to="/" style={{ color: "white" }}>
            Home
          </Button>
          <Button component={Link} to="/aboutme" style={{ color: "white" }}>
            About me
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

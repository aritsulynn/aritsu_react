import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";

import { IoMoon, IoSunny } from "react-icons/io5";

export default function Topping(props) {

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link to="/" style={{textDecoration:"none", color: "white"}} ><Typography variant="h6">Aritsu</Typography></Link>
          <Box flexGrow={1} />
          <Link to="/"style={{textDecoration:"none", color: "white"}} >Home</Link>
          <Switch
            icon={<IoSunny />}
            checkedIcon={<IoMoon />}
            checked={props.themeNow}
            onChange={props.toggleTheme}
            color="default"
            style={{ fontSize: "20px" }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

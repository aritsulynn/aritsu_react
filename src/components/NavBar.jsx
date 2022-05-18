import React from "react";
import { FaSun, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Typography,
  Switch,
  Box,
  AppBar,
  Grid,
  Toolbar,
} from "@material-ui/core";

export default function NavBar(props) {
    return(
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
                    checked={props.check}
                    onChange={props.onchange}
                    color="default"
                  ></Switch>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
    )
}
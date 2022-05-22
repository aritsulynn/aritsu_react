import React from "react";

import { Typography, Button, Grid, Container } from "@mui/material";

import { makeStyles } from "@mui/styles";
import aritsu_cover from '../img/aritsu_cover.png'

const useStyles = makeStyles((theme) => ({
  custom: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
}));

export default function Home(props) {

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column" align="center">
        <Grid item>
          <img
            src={aritsu_cover}
            alt="Aritsu Cover"
            className={classes.custom}
          />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
            Aritsu Lynn's
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: "lighter" }}>
            Hello! I'm Lynn, who love anime and games. feel free to contact me{" "}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

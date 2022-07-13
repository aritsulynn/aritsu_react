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
            alt="aritsu Cover"
            className={classes.custom}
          />
        </Grid>
        <Grid item>
          {/* <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
            Lynn's 
          </Typography> */}
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: "lighter" }}>
            " Compared to the noisy cicada, the silent firefly suffers more inside. " ー Senryuu Shoujo
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

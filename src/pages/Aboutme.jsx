import React from "react";

import { Typography, Button, Grid, Container, Paper, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";
import aritsu_cover from "../img/aritsu_cover.png";

const useStyles = makeStyles((theme) => ({
  custom: {
    [theme.breakpoints.down("md")]: {
      width: "200px",
    },
    [theme.breakpoints.up("md")]: {
      width: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "300px",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  let text = 
  `I'm Lynn ー a dull, gloomy guy and also a student at the some University who interested in coding, anime and games. I'm playing League of Legends and Valorant.
  Feel free to contact me if you have any questions or anything else.
  `;
  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid container justifyContent="center">
        <Grid item xs='auto'>
          <img
            src={aritsu_cover}
            alt="Aritsu Cover"
            className={classes.custom}
          />
        </Grid>
        <Grid item xs={7} style={{marginTop:'auto', marginBottom:'auto'}}>
          <Grid container justifyContent='center' >
            <Grid item>
              <Typography style={{fontSize: "30px" }}>
                Hey. What's up? Hello! ╰(*°▽°*)╯
              </Typography>
            </Grid>
            <Grid item>
                <Paper style={{padding: "10px 10px"}}>
                    <Typography display="inline">{text}</Typography>
                </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

import React from "react";

import { Typography, Button, Grid, Container } from "@mui/material";

// import { makeStyles } from "@mui/styles";
import CoverImg from "../img/aritsu_cover.png";

// const useStyles = makeStyles((theme) => ({
//   custom: {
//     [theme.breakpoints.down("md")]: {
//       width: "300px",
//     },
//     [theme.breakpoints.up("md")]: {
//       width: "400px",
//     },
//     [theme.breakpoints.up("lg")]: {
//       width: "500px",
//     },
//   },
// }));

export default function Home(props) {
  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid container direction="column" align="center">
        <Grid item className="object-contain">
          <img src={CoverImg} alt="coverImg" className="max-h-96" />
        </Grid>
        <Grid item sx={{ marginTop: "15px" }}>
          <Typography style={{ fontWeight: "normal" }}>
            "Compared to the noisy cicada, the silent firefly suffers more
            inside." ー Senryuu Shoujo
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

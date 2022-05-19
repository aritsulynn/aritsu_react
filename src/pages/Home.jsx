import React, {useState}  from "react";
import { Grid, makeStyles, Typography, Box, Container } from "@material-ui/core";
import { width } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    custom:{
        [theme.breakpoints.down('md')]: {
            width: "300px",
        },
        [theme.breakpoints.up('md')]: {
            width: "400px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "500px",
        },
    },
}));
export default function Home() {
    const classes = useStyles();
    return(
        <Container>
            <Grid container direction="column" alignContent="center" alignItems='center'>
                <Grid container justifyContent="center" alignContent="center">
                    <Grid item>
                        <img src="https://i.imgur.com/iafleFP.png" className={classes.custom} alt="Aritsu Cover"/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography align='center' style={{fontSize: "30px",fontWeight:"bold"}}>Aritsu Lynn's</Typography>
                    <Typography align='center' style={{fontWeight:"lighter"}}>Hello! I'm Lynn, who love anime and games. feel free to contact me </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

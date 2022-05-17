import React, { useState } from "react";

import { BsDiscord,
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub} from "react-icons/bs";

import Link from '@mui/material/Link';
import { Typography, CssBaseline, Switch, Box, Container, AppBar, Grid, Toolbar, makeStyles} from "@material-ui/core";
// import useStyles from '../themes/makeStyle';



const useStyles = makeStyles(({
    darkTheme :{
        color: '#222222',
        marginTop: '10px',
        marginLeft: '15px',
        fontSize: '30px',
        marginBottom: '10px',
        "&:hover, &:focus": {
            color: "Orange",
        },
    },
    lightTheme :{
        color: 'white',
        marginTop: '10px',
        marginLeft: '15px',
        fontSize: '30px',
        marginBottom: '10px',
        "&:hover, &:focus": {
            color: "Orange",
        },
    },
}));

function Footer(props) {

    const classes = useStyles();

    return(
        <Container style={{paddingTop: "10px", paddingBottom:"10px"}}>
            <Grid container justifyContent="center">
                <Grid item>
                    <a href="https://www.facebook.com/aritsulynn" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsFacebook /></a>
                </Grid>
                <Grid item>
                    <a href="https://www.instagram.com/aritsulynn/" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsInstagram /></a>
                </Grid>
                <Grid item>
                    <a href="https://twitter.com/aritsulynnjp" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsTwitter /></a>    
                </Grid>
                <Grid item>
                    <a href="https://github.com/Aritsulynn" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsGithub /></a>  
                </Grid>
                <Grid item>
                    <a href="https://discordapp.com/users/291900215785685014" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsDiscord /></a>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
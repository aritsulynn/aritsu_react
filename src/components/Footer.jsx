import React, { useState } from "react";

import { BsDiscord,
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub} from "react-icons/bs";

import { Typography, Container, Grid } from "@mui/material";

import { makeStyles } from '@mui/styles'

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

export default function Footer(props) {

    const classes = useStyles();

    return(
        <Container style={{marginTop: "10px"}}>
            <Grid container justifyContent="center">
                <Grid item>
                    <a href="https://www.facebook.com/aritsulynn" className={props.themeNow ? classes.lightTheme : classes.darkTheme}><BsFacebook /></a>
                </Grid>
                <Grid item>
                    <a href="https://www.instagram.com/aritsulynn/" className={props.themeNow ? classes.lightTheme : classes.darkTheme}><BsInstagram /></a>
                </Grid>
                <Grid item>
                    <a href="https://twitter.com/aritsulynnjp" className={props.themeNow ? classes.lightTheme : classes.darkTheme}><BsTwitter /></a>    
                </Grid>
                <Grid item>
                    <a href="https://github.com/Aritsulynn" className={props.themeNow ? classes.lightTheme : classes.darkTheme}><BsGithub /></a>  
                </Grid>
                <Grid item>
                    <a href="https://discordapp.com/users/291900215785685014" className={props.themeNow ? classes.lightTheme : classes.darkTheme}><BsDiscord /></a>
                </Grid>
            </Grid>
            {/* <div><h1>dasd</h1></div> */}
        </Container>
        // <div>
        //     <h1>footer</h1>
        // </div>
    );
}
// 
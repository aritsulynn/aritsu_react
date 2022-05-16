import React, { useState } from "react";

import { BsDiscord,
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub} from "react-icons/bs";

import Link from '@mui/material/Link';

import useStyles from '../themes/makeStyle';

function Footer(props) {

    const classes = useStyles();

    return(
        <div>
            <div className="footer">
                <a href="https://www.facebook.com/aritsulynn" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsFacebook /></a>
                <a href="https://www.instagram.com/aritsulynn/" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsInstagram /></a>
                <a href="https://twitter.com/aritsulynnjp" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsTwitter /></a>
                <a href="https://github.com/Aritsulynn" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsGithub /></a>
                <a href="https://discordapp.com/users/291900215785685014" className={props.themes === "darkTheme" ? classes.lightTheme : classes.darkTheme}><BsDiscord /></a>
            </div>
        </div>
    );
}

export default Footer;
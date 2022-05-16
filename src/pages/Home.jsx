import React, {useState}  from "react";
import Helmet from 'react-helmet';



export default function Home() {
    return(
        <div className="Home">
            <Helmet>
                <meta property='og:title' content='Aritsu | Home'></meta>
            </Helmet>
            <div className="img-cover">
                <img src="https://i.imgur.com/iafleFP.png"/>
            </div>
            <div className="text-cover">
                <h1>Aritsu Lynn's</h1>
                <h3 style={{fontWeight:"lighter"}}>Hello! I'm Lynn, who love anime and games. <br></br>feel free to contact me </h3>
            </div>
        </div>
    );
}

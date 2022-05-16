import React from "react";
import Helmet from "react-helmet";

export default function () {
    return(
        <div>
            <Helmet>
                <meta property='og:title' content='Aritsu | About me'></meta>
            </Helmet>
            <p>ABOUT</p>
        </div>
    );
}

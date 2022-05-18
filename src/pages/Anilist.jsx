import React from "react";


const client_id = "";
const client_secret = "";

export default function Anilist(){
    return(
        <div>
            <a href='https://anilist.co/api/v2/oauth/authorize?client_id=7657&redirect_uri=https://anilist.co/api/v2/oauth/pin&response_type=code'>Login with AniList</a>
        </div>
    )
}
import React from "react";


export default function Anilist(){

    // var url = 'https://graphql.anilist.co',
    // options = {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Bearer ' + accessToken,
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         query: query
    //     })
    // };

    // fetch(url, options).then(handleResponse, handleError);

    // function handleResponse (response) {
    //     console.log(response);
    // }

    return(
        <div>
            <a href='https://anilist.co/api/v2/oauth/authorize?client_id=7657&response_type=token'>Login with AniList</a>
        </div>
    )
}
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetAnilistUserData from '../components/GetAnilistUserData';

export default function Anime(props){
    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
        cache: new InMemoryCache(),
    });
    return(
        <ApolloProvider client={client}>
            <GetAnilistUserData themes={props.themes}/>
        </ApolloProvider>
    )
}


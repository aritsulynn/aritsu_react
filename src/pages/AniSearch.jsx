import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetUserAnime from '../components/GetUserAnime';

export default function Anime(props){
    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
        cache: new InMemoryCache(),
    });
    return(
        <ApolloProvider client={client}>
            <GetUserAnime themes={props.themes === "darkTheme" ? "darkTheme" : "lightTheme"}/>
        </ApolloProvider>
    )
}


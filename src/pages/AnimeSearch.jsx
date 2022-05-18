import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetAnime from '../components/GetAnime';

export default function Anime(props){
    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
        cache: new InMemoryCache(),
    });
    return(
        <ApolloProvider client={client}>
            <GetAnime themes={props.themes}/>
        </ApolloProvider>
    )
}


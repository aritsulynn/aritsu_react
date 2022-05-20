import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetAniBrowse from '../components/GetAniBrowse';

export default function Anime(props){
    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
        cache: new InMemoryCache(),
    });
    return(
        <ApolloProvider client={client}>
            <GetAniBrowse themes={props.themes}/>
        </ApolloProvider>
    )
}


import React, { useState, useEffect } from "react";
import { GET_ANILIST_SEARCH_QUERY } from "../graphQL/Query";
import { useLazyQuery } from "@apollo/client";

import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  TextField,
  makeStyles,
  Input,
  Link,
  FormControl,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  customImg :{
    transition: "transform .2s",
    "&:hover":  { 
      transform: "scale(1.2) "
    }
  },
  darkTheme: {
    borderRadius: "10px",
    color: "#222222",
  },
  lightTheme: {
    borderRadius: "10px",
    color: "white",
  },
}));

export default function GetAnime(props) {
  const [animeName, setAnimeName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [getAnime, { loading, data, error }] = useLazyQuery(GET_ANILIST_SEARCH_QUERY, {
    variables: { page: pageNumber, search: animeName},
  }); 


  function handlePageIncrease() {
    if(pageNumber >= 1 && data.Page.pageInfo.hasNextPage === true){
      setPageNumber(pageNumber + 1);
    }
  }

  function handlePageDecrease() {
    if(pageNumber > 1){
      setPageNumber(pageNumber - 1);
    }
  }
  // useState(() => {
  //   getAnime();
  // });
  // let result = "";
  // if (data) {
  //   let text = data.Media.description;
  //   result = text.replace(/<[^>]*>/g, "");
  // }
  // console.log(data.Page.pageInfo.hasNextPage);
  const classes = useStyles();
  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
            <FormControl fullWidth>
              <TextField
                label="Anime name"
                onKeyPress={() => getAnime()}
                onChange={(e) => setAnimeName(e.target.value)}
                color="secondary"
                InputLabelProps={{ className: props.themes ? classes.lightTheme : classes.darkTheme }}
                style={{color: props.themes ? "white" : "black"}}
                variant="outlined"
              />
            </FormControl>
            <Button onClick={handlePageDecrease}>Previous Page</Button>
            <Button onClick={handlePageIncrease}>Next Page</Button>
        </Grid>
        <Grid item>
          <Box>
            <Grid container spacing={2} justifyContent="center">
              {loading && <p>Loading...</p>}
              {error && <p>Error :( Please try again</p>}
              {data && data.Page.media.map((media)=>{
                return (
                  <Grid item>
                    <a href={media.siteUrl} target="_blank" rel="noopener noreferrer"><img src={media.coverImage.large} alt="anime" width="150px" height="200px" className={classes.customImg}/></a>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

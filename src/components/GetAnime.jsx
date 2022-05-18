import React, { useState } from "react";
import { GET_ANIME_QUERY } from "../graphQL/Query";
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
  FormControl,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  darkTheme: {
    borderRadius: "10px",
    text: {
      color: "#222222",
    },
  },
  lightTheme: {
    borderRadius: "10px",
    text: {
      color: "#fff",
    },
  },
  input: {
    color: "black",
    textAlign: "center",
    fontSize: "20px",
  },

}));

export default function GetAnime(props) {
  const [searchAnime, setSearch] = useState("");

  const [getAnime, { loading, data, error }] = useLazyQuery(GET_ANIME_QUERY, {
    variables: { search: searchAnime },
  });

  let result = "";
  if (data) {
    let text = data.Media.description;
    result = text.replace(/<[^>]*>/g, "");
  }

  const classes = useStyles();

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Grid item style={{backgroundColor:"white" , borderRadius:"15px"}}>
            <FormControl fullWidth>
              <TextField
                label="Anime name"
                onKeyPress={() => getAnime()}
                onChange={(e) => setSearch(e.target.value)}
                inputProps={{ className: classes.input }}
                className={ props.themes ? classes.darkTheme : classes.lightTheme }
                variant="outlined"
              />
              {/* <Button onClick={() => getAnime()} style={{backgroundColor:"black", color: "white", borderRadius: "15px"}}>Butoon</Button> */}
            </FormControl>
        </Grid>
        <Grid item>
          {data && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img src={data.Media.coverImage.large} />
              </Grid>
              <Grid item>
                <Typography variant="h3">
                  {" "}
                  {data.Media.title.english}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle">{result}</Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

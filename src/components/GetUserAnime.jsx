import React, { useState, useEffect } from "react";
import { GET_USER_ANIME_QUERY } from "../graphQL/Query";
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
  InputLabel,
  NativeSelect,
  FormHelperText,
  Paper
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

export default function GetUserAnime(props) {
  const [username, setUsername] = useState("");

  const [getAnime, { loading, data, error }] = useLazyQuery(GET_USER_ANIME_QUERY, {
    variables: { name: username },
  });

  // if(data){
  //   let text = data.MediaListCollection.lists[0].entries.map((entry) => {
  //     return entry.media.title.english;
  //   });
  //   console.log(text);
  // }
  // if(data && data.MediaListCollection.lists.length > 0){
  //   let text = data.MediaListCollection.lists[0].entries.map((entry) => {
  //     return entry.media.title.english;
  //   });
  //   console.log(text);
  // }
  const classes = useStyles();


  console.log(data);

  useEffect(() => {
    setUsername("Aritsulynn");
    getAnime();
  }, []);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      > 
        <Grid item style={{backgroundColor:"white" , borderRadius:"15px"}}>
            <FormControl>
              <TextField
                label="Username"
                defaultValue="Aritsulynn"
                onKeyPress={() => getAnime()}
                onChange={(e) => setUsername(e.target.value)}
                inputProps={{ className: classes.input }}
                className={ props.getthemes === "darkTheme" ? classes.darkTheme : classes.lightTheme }
                variant="outlined"
              />
              {/* <Button onClick={() => getAnime()} style={{backgroundColor:"black", color: "white", borderRadius: "15px"}}>Butoon</Button> */}
            </FormControl>
        </Grid>
        <Grid item><Typography>Searching by Username. *Working with anime only</Typography></Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={2}
      >
        {/* Completed */}
        <Grid item>
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography>error</Typography>}
          {data && data.MediaListCollection.lists.map((list) => {
            return (
              <Grid container>
                <Typography variant="h4">{list.name}</Typography>
                {(typeof(list.entries)=='object') ?
                <Grid container justifyContent='center'>
                  {list.entries.map((entry) =>{
                    return(
                          <Grid item style={{width:"150px", margin:"5px"}}>
                            <img src={entry.media.coverImage.large} alt={entry.media.title.english} width="150px" height="200px"/>
                            <Typography variant="subtitle1">{entry.media.title.romaji}</Typography>
                          </Grid>
                    )})
                  }
                </Grid> 
                : null}
            </Grid>
            )
          })  
          }
        </Grid>
      </Grid>
    </Container>
  );
}

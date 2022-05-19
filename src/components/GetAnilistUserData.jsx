import React, { useState, useEffect } from "react";
import { GET_ANILIST_USER_QUERY } from "../graphQL/Query";
import { useLazyQuery } from "@apollo/client";

import { orange } from '@mui/material/colors';

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
  Paper,
  Link,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  darkTheme: {
    borderRadius: "10px",
    color: "#222222",
  },
  lightTheme: {
    borderRadius: "10px",
    color: "white",
  },
  input: {
    textAlign: "center",
    fontSize: "20px",
  },
  labelcustom:{
    color: "white",
  },
}));

export default function GetAnilistUserData(props) {
  const [username, setUsername] = useState("");
  const [type, setType] = useState("ANIME");

  const [getAnime, { loading, data, error }] = useLazyQuery(GET_ANILIST_USER_QUERY, {
    variables: { name: username, type: type },
  });

  const [category, setCategory] = useState("All");
  
  const classes = useStyles();
  // console.log(data);
  // console.log(type);
  useEffect(() => {
    setUsername("Aritsulynn");
    getAnime();
  }, []);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="center"
      > 
        <Grid container>
            <Box style={{width: "100%", padding: "10px 10px"}}>
              <Grid container direction="column" spacing={2}>
                <Grid item style={{width: "100%"}}>
                  <TextField
                        label="Name"
                        defaultValue="Aritsulynn"
                        onKeyPress={() => getAnime()}
                        onChange={(e) => setUsername(e.target.value)}
                        // inputProps={{ className: classes.input }}
                        InputLabelProps={{ className: props.themes ? classes.lightTheme : classes.darkTheme }}
                        style={{color: props.themes ? "white" : "black"}}
                        fullWidth
                      />
                </Grid>
                <Grid item style={{width: "100%"}}>
                  <FormControl fullWidth>
                    <InputLabel id="type-selector" style={{color: props.themes ? "white" : "black"}}>Type</InputLabel>
                    <Select
                      labelId="type-selector"
                      id="type-selector"
                      label="type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                    <MenuItem value="ANIME" style={{color: "black"}}>Anime</MenuItem>
                    <MenuItem value="MANGA" style={{color: "black"}}>Manga</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item style={{width: "100%"}}>
                  <FormControl fullWidth>
                    <InputLabel id="category-selector" style={{color: props.themes ? "white" : "black"}}>Category</InputLabel>
                    <Select
                      labelId="category-selector"
                      id="category-selector"
                      label="Category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                    <MenuItem value="All" style={{color: "black"}}>All</MenuItem>
                    {data && data.MediaListCollection.lists.map((list) => {
                      return (
                        <MenuItem value={list.name} style={{color: "black" }}>{list.name}</MenuItem>
                        )})}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={2}
      >
        {/* Completed */}
        <Grid item>
          {/* {loading && <Typography>Loading...</Typography>}
          {error && <Typography>error</Typography>} */}
          {data && data.MediaListCollection.lists.filter((val) =>{
            if(category == "All"){
              return val
            }else if(val.name.toLowerCase() === category.toLowerCase()){
              return val
            }
            }).map((list) => {
              return (
                <Grid container>
                  <Typography variant="h4" id={list.name}>{list.name}</Typography>
                  {(typeof(list.entries)=='object') ?
                  <Grid container justifyContent='center'>
                    {list.entries.map((entry) =>{
                      return(
                            <Grid item style={{width:"150px", margin:"5px"}}>
                              <img src={entry.media.coverImage.large} alt={entry.media.title.english} width="150px" height="200px"/>
                              <Link href={entry.media.siteUrl} target="_blank" rel="noopener noreferrer" className={ props.themes ? classes.lightTheme : classes.darkTheme}><Typography variant="subtitle1" >{entry.media.title.romaji}</Typography></Link>
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

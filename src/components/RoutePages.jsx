import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Notfound from "../pages/Notfound";
import Home from "../pages/Home";
import About from "../pages/About";
import AnimeSearch from "../pages/AnimeSearch";
import Anilist from "../pages/Anilist";
import UserAnime from "../pages/AniSearch";

import {
    Box
} from "@material-ui/core";

export default function RoutePages(props) {
    return(
        <Box>
            <Routes>
              <Route path="*" element={<Notfound />} />
              <Route path="/" element={<Home />} />
              <Route path="/Linktree" element={<Home />} />
              <Route path="/About" element={<About />} />
              {/* <Route path="/Anilist" element={<Anilist />} /> work in progress login */}
              <Route path="/Anime" element={<AnimeSearch themes={props.themes} />} />
              <Route path="/AniSearch" element={<UserAnime themes={props.themes}/>} />
            </Routes>
        </Box>
    )
}
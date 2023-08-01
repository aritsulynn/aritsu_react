import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";

import useLocalStorage from "use-local-storage";
import CoverImg from "./img/aritsu_cover.png";

function App() {
  const [theme, setTheme] = useLocalStorage("isDarkTheme", true);

  const toggleTheme = () => {
    setTheme(theme ? false : true);
  };

  return (
    <div className="mt-3">
      <div direction="column" align="center">
        <div className="object-contain">
          <img src={CoverImg} alt="coverImg" className="max-h-96" />
        </div>
        <div className="mt-3 mx-3">
          <p className="font-normal text-lg ">
            "Compared to the noisy cicada, the silent firefly suffers more
            inside." ー Senryuu Shoujo
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

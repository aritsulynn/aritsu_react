import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    background: {
      default: "#1f1f1f",
    },
    mode : "dark",
  },
  typography: {
    fontFamily: "Comic Neue",
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    background: {
      default: "#fff",
    },
    mode : "light",
  },
  typography: {
    fontFamily: "Comic Neue",
  },
});

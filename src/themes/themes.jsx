import { createTheme } from "@material-ui/core";
import { red, blue } from "@mui/material/colors";


export const lightTheme = createTheme({
  palette: {
      background: {
        default: "#ffffff"
      },
      text: {
        primary: "#222222"
      },
    }
});

export const darkTheme = createTheme({
    palette: {
        background: {
          default: "#222222"
        },
        text: {
          primary: "#ffffff"
        },
      },
  
});



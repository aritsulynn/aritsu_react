import { makeStyles } from "@material-ui/core/styles";
import { lightTheme } from "./themes";


const useStyles = makeStyles(theme => ({
    darkTheme :{
        color: '#222222',
        marginTop: '10px',
        marginLeft: '15px',
        fontSize: '30px',
        marginBottom: '10px',
        "&:hover, &:focus": {
            color: "Orange",
        },
    },
    lightTheme :{
        color: 'white',
        marginTop: '10px',
        marginLeft: '15px',
        fontSize: '30px',
        marginBottom: '10px',
        "&:hover, &:focus": {
            color: "Orange",
        },
    },
}));



export default useStyles;
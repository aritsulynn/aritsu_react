import { Grid, Typography, Link, Button, Container } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";


export default function Notfound(){


    return(
        <Container style={{paddingTop: "100px", paddingBottom:"100px"}}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Typography>
                        Sorry, that pages doesn't exist.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" style={{backgroundColor:"#222222"}}>
                        <a href="/"><Typography style={{color:"white"}}>GO HOME</Typography></a>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

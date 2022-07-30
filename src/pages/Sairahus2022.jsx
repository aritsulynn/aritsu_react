import { Typography, Button, Grid, Container } from "@mui/material";
import React, { useEffect } from "react";


export default function sairahus2022() {

  const [counts, setCounts] = React.useState(176);

  useEffect(() => {
    if(counts >= 178){
      setCounts(178);
    }
  })


  return (
    <Container>
      <Grid container direction="column" align="center">
        <Grid item>
          <Typography style={{ fontSize: "100px", fontWeight: "bold" }}>
            Sairahus "2022"
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontWeight: "lighter", fontSize: "40px" }}>
            กดให้ครบ xx ครั้งเพื่อให้ได้รับคำใบ้
          </Typography>
        </Grid>
        <Grid item>
          <Button style={{ fontSize: "60px", border: "1px dashed black"}} onClick={()=> setCounts(prev => (prev + 1))}>
            Click me!
          </Button>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "16px" }}>"กดปุ่ม 100 ล้านปี รู้ตัวอีกที ก็เทพซะแล้ว"</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "30px" }}>
            กดไปแล้วทั้งหมด {counts} ครั้ง
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "25px" }}>
            {counts>=178 ? "คำใบ้คือกดไปกี่ครั้ง แล้วมันหมายความว่ายังไงน้าาา"  : ""}
          </Typography>
        </Grid>  
      </Grid>
    </Container>
  );
}

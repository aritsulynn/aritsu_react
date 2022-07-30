import { Typography, Button, Grid, Container } from "@mui/material";
import React, { useEffect } from "react";


export default function sairahus2022(props) {

  const [counts, setCounts] = React.useState(0);

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
          <Button style={{ fontSize: "60px", border: "1px dashed black", borderRadius: "12px", marginTop: "10px", marginBottom: "10px"}} onClick={()=> setCounts(prev => (prev + 1))}>
            Click me!
          </Button>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "16px" }}>"กดปุ่ม 100 ล้านปี รู้ตัวอีกที ก็เทพซะแล้ว"</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
            กดไปแล้วทั้งหมด {counts} ครั้ง
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "25px", fontWeight: "lighter", marginTop: "10px"}}>
            {counts >= 0 && counts < 1 ? "กดเริ่มได้เลยย" : ''}
            {counts >= 25 && counts < 35 ? "น้องสู้ปุ่มกด แต่ปุ่มกดสู้กลับ xD" : ''}
            {counts >= 50 && counts <= 51 ? "จะต้องกดอีกกี่ปีน้ออออออ" : ''}
            {counts >= 75 && counts <= 80 ? "สู้ๆค้าบบบ" : ''}
            {counts >= 100 && counts <= 101 ? "ปลดล็อคความสำเร็จ 'กดไปแล้วทั้งหมด 100 ครั้ง' " : ''}
            {counts >= 140 && counts <= 150 ? "พยายามอีกนิดนึงนะ (⌐■_■)" : ""}
            {counts >= 151 && counts <= 160 ? "คำใบ้คือ" : ""}
            {counts >= 161 && counts <= 170 ? "คำใบ้คืออ" : ""}
            {counts >= 171 && counts <= 177 ? "คำใบ้คือออ" : ""}
            {counts >=178 ? "คำใบ้คือ พี่ใส่เสื้อสีดำและง่วงนอน"  : ""}<br/>
            {counts >=178 ? "(คำใบ้ที่ 2 : และกดไปแล้วกี่ครั้งน้าา?? แล้วมันหมายความว่ายังไง? มันคืออะไรอ่าา! จะต้องถามพี่คนไหน?)"  : ""}
          </Typography>
        </Grid>  
      </Grid>
    </Container>
  );
}

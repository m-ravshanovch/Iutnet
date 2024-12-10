import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Homep from '../images/homep.jpg'
import Typography from '@mui/material/Typography';
import './main.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <Box sx={{ width: "100%", height: "600px"}}>
      <Box sx={{ flexGrow: 3 ,padding:10}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} >
            <Grid container spacing={2} sx={{textAlign:"center"}}>
              <Grid item xs={12} md={12}>
                <Typography sx={{ color: 'white', fontSize: {xs:"30px",md:"45px"} }}>IUTNET</Typography>
                <Typography sx={{ color: 'rgb(96, 107, 117)', fontSize: "15px" }}>
                  THIS PROJECT WAS MADE <br /> BY  FRESHMEN STUDENTS OF INHA UNVERSITY
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}  >
            <Grid container spacing={2} sx={{textAlign:"center"}}>
              <Grid item xs={12} md={12}>
                <Grid container spacing={2} sx={{width:"100%",margin:"auto"}}>
                  <Grid item md={6} xs={12}>
                    <Button variant="contained" sx={{textDecoration:"none"}}>
                      <Link style={{color:"white",textDecoration:"none"}} to={'/'} >BUY IUTNET</Link>
                    </Button>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Button variant="outlined">
                    <Link to={'/Product'} style={{color:"white",textDecoration:"none"}}>PRODUCT</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

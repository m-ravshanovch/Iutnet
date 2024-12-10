import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player';
import Video from '../Product/pp.mp4'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardMedia from '@mui/material/CardMedia';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import Jpg1 from '../images/dd.jpg'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



export default () => {
  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 5, md: 10 } }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <ReactPlayer
            url={Video}
            controls={false}
            style={{ margin: "auto" }}
            playing="auto"
            loop="true"
            muted="false"
            width="100%"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{textAlign:{xs:"center",md:"right",sm:"right"}}}>
              <Button variant="contained"><Link style={{ textDecoration: "none", color: "white" }} to={'/Myboughts'}>BUy</Link></Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "30px", color: "white" }}>
                Advanced PC Cooling System
              </Typography>
              <Typography sx={{ color: "rgb(96, 107, 117)", marginTop: 1 }}>
                Protect your computer from overheating with our state-of-the-art cooling solution designed for maximum efficiency and reliability. This high-performance cooler ensures stable temperatures during intense gaming sessions, resource-heavy multitasking, or prolonged usage.

                <p> <br /> <strong>Key Features:</strong> <br /></p>
                <b> - Superior Heat Dissipation:</b> Built with advanced thermal technology to quickly disperse heat. <br />
                <b> - Quiet Operation:</b> Whisper-quiet fans to ensure uninterrupted focus and productivity. <br />
                <b> - Universal Compatibility:</b>  Designed to fit most PC cases and support various CPU models. <br />
                <b> - Durable Build:</b> Constructed with premium materials to withstand long-term use. <br />
                <b> - Energy Efficient:</b> Optimized to reduce power consumption without compromising performance. <br />
                <p>Perfect for gamers, video editors, and anyone who relies on their PC for heavy-duty tasks.Say goodbye to overheating and hello to uninterrupted performance!

                  Let me know if you'd like the description tailored further!</p></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: "white",
    backgroundColor:"black"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:"white"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    backgroundColor:"rgb(9, 0, 49)",
    color:"white"
  },
  // hide last border
 
}));

function createData(picture, calories, fat, carbs, protein) {
  return { picture, calories, fat, carbs, protein };
}

const rows = [
  createData('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlklAadtCyeGF7witfqehddYNx0szZ-967iw&s',"iutnet", "black",1),
];

export default () => {
  return (
    <Box sx={{ flexGrow: 1,padding:{xs:5,md:10}}}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <TableContainer component={Paper} sx={{background:"inherit",width:"100%",border:"none",boxShadow:"0px 2px 10px rgb(96, 107, 117)"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Picture</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Color</StyledTableCell>
                  <StyledTableCell align="right">Soni</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{color:"white"}}>
                {rows.map((row) => (
                  <StyledTableRow key={row.name} sx={{color:"white"}}>
                    <StyledTableCell component="th" scope="row">
                      <CardMedia
                        style={{width:"100px",height:"100px",backgroundSize:"100%"}}
                        image={row.picture}
                        title="green iguana"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

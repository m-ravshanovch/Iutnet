import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import BoyIcon from '@mui/icons-material/Boy';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

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
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ padding: { md: 30, xs: 3, height: "100%", display: "flow-root", justifyContent: "flex-end", alignItems: "center", justifyItems: "center" } }}>
            <Box sx={{ flexGrow: 1, margin: "auto" }}>
                <Grid container spacing={2} sx={{ textAlign: "center" }}>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            type="email"
                            variant="standard"
                            defaultValue={"someone@gmail.com"}
                            sx={{
                                width:{xs:"95%",md:"30%",sm:"40%"},
                                color: 'white',        // Text color
                                borderRadius: '4px',   // Rounded corners
                                border:"1px solid blue",
                                input: {
                                    color: 'white',       // Input text color
                                },
                                label: {
                                    color: "white"
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'blue',  // Hover border color
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',   // Focused border color
                                    },
                                },
                            }} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined"
                            sx={{
                                color: 'white',        // Text color
                                backgroundColor: 'rgb(1, 0, 75)', // Background color
                                borderRadius: '4px',   // Rounded corners
                                input: {
                                    color: 'white',       // Input text color
                                },
                                label: {
                                    color: "white"
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'blue',  // Hover border color
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',   // Focused border color
                                    },
                                },
                            }} >
                            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <BoyIcon
                                            sx={{ color: "white" }}
                                        >
                                        </BoyIcon>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined"
                            sx={{
                                color: 'white',        // Text color
                                backgroundColor: 'rgb(1, 0, 75)', // Background color
                                borderRadius: '4px',   // Rounded corners
                                input: {
                                    color: 'white',       // Input text color
                                },
                                label: {
                                    color: "white"
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'blue',  // Hover border color
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',   // Focused border color
                                    },
                                },
                            }} >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: "white" }}
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Typography sx={{ color: 'blue', paddingTop: 2 }}>Click the register</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sx={{margin:"auto"}}>
                                <Button variant="contained"><Link style={{ textDecoration: "none", color: "white" }} to={'/Homepage'}>Register</Link></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

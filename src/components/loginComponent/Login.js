import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import { Avatar, TextField,Checkbox,FormControlLabel,Button,Link, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  const paperStyle={ padding:20, height:'70vh',width:280,margin:"20px auto"}
  const RememberStyle={margin:"5px 20px"}
  const SignUP={margin:"10px auto"}
  return (
    <div>
    <Grid xs={4}>
    <Paper elevation={3} style={paperStyle}>
      <Grid align='center'>
      <Avatar ><LockOutlinedIcon></LockOutlinedIcon>
      </Avatar>
      <h2>SIGN IN</h2>
      </Grid>
      <TextField id="standard-basic" label="Enter Username" variant="standard" fullWidth required style={RememberStyle} />
      <TextField id="standard-basic" label="Enter Password" variant="standard" fullWidth required type="password" style={RememberStyle}/>
<Grid style ={RememberStyle}> <FormControlLabel required control={<Checkbox />} label="Remember Me" /></Grid>
<Grid ><Button variant="contained" fullWidth required >SIGN IN</Button></Grid>
<Grid style ={RememberStyle}> <Link href="#">Forgot Password</Link>
<Grid style ={SignUP}><Typography>Do you have an account?<Link href="#">Sign Up</Link></Typography> </Grid>
</Grid>
</Paper>

        </Grid>
      
      
   
    </div>
  );
}

export default Login;

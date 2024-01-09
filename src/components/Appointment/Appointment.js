import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from '@mui/material/Paper';
import {  TextField,Button ,NativeSelect,FormControl,InputLabel} from "@mui/material";

function Appointment(){
    const PaperStyle={height:'80vh' ,width:'70vh', margin:'20px auto' }
    const TextStyleRow1={xs:6,height:'100px',padding:'2px', align:'center'
    }
    const TextStyleRow2={xs:6,height:'100px',width:'50vh',padding:'1px', align:'center'
}
const[details,setDetails]=useState({
    firstname:"",
    lastname:"",
    email:"",
    mobile:"",
    address:"",
    age:""
  })
    const handleChange=(e)=>{
        const {name,value}=e.target
        console.log("details",details)
        setDetails((prev=>{return {...prev,[name]:value} }))
      }
      const handleSubmit= (e)=>{
        if(!details.firstname || !details.lastname|| !details.email || !details.mobile ||!details.address )
        alert("Enter Data in all fields")
        else
        alert("Appointment booked successfully")
        
        }
    return(
        <>
        <Grid>
        <Paper elevation={3} style={PaperStyle}>

            <Grid xs={6} align='center'>
                <h3 >Appointment Form</h3>
                <TextField name='firstname'  style={TextStyleRow1} placeholder="firstname" variant="outlined" onChange={handleChange}/>
            <TextField  name='lastname' style={TextStyleRow1} placeholder="lastname" variant="outlined" onChange={handleChange}/>
           <TextField name='email' style={TextStyleRow2} placeholder="email" variant="outlined" onChange={handleChange}/>
           <TextField name='mobile' style={TextStyleRow2} placeholder="mobile" variant="outlined" onChange={handleChange}/>
           <TextField name='address' style={TextStyleRow2} placeholder="address" variant="outlined" onChange={handleChange}/>
           <Grid style={TextStyleRow2}>
           <FormControl fullWidth>
 
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Age
  </InputLabel>
  <NativeSelect name='age'
  defaultValue={[]}
  placeholder="select age"
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
  </NativeSelect>
</FormControl>
</Grid>
<Button onClick={handleSubmit} variant="contained" fullWidth required >SIGN IN</Button>
         </Grid>
            </Paper></Grid></>
            
    )
}

export default Appointment
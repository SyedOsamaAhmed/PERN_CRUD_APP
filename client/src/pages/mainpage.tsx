import React from 'react'
import {  withAuthenticationRequired} from "@auth0/auth0-react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Mainpage() {
  const navigate=useNavigate();

  return (
    <div className='main-container'>
           <div>
        <TextField
          id="outlined-basic"
          label="Input"
        
          type="text"
          variant="outlined"
        />
      </div>
      <div className='btn-container'>
        <Button variant="contained" >Save</Button>
        <Button variant="contained" onClick={()=>navigate('/login')} >Back to Login</Button>
      </div>
    
    
    </div>
  )
}

export default withAuthenticationRequired(Mainpage,{
  onRedirecting:()=><CircularProgress/>
})
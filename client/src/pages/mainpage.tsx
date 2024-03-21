import React from 'react'
import { useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import { TextField, Button, CircularProgress } from "@mui/material";

function Mainpage() {
  const {user}=useAuth0();
  console.log(user)
  return (
    <div>
           <div>
        <TextField
          id="outlined-basic"
          label="Input"
        
          type="text"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained" >Save</Button>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Mainpage,{
  onRedirecting:()=><CircularProgress/>
})
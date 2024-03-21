import {  Button } from "@mui/material";
import { useAuth0} from "@auth0/auth0-react";

function Login() {
  const {loginWithRedirect}=useAuth0()
  return (
    <div>
    
      <div>
        <Button variant="contained" onClick={()=>loginWithRedirect()}>Signin</Button>
      </div>
    </div>
  );
}

export default Login;

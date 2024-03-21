import {  Button } from "@mui/material";
import { useAuth0} from "@auth0/auth0-react";

function Login() {
  const {loginWithRedirect}=useAuth0()
  return (
    <main className="container">
      

      <h1 className="main-tile">Authentication with AUTH0</h1>
     
    
      <div className="button">

        <Button variant="contained" onClick={()=>loginWithRedirect()}>Signin</Button>
      </div>

    </main>
  );
}

export default Login;

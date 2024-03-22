import React from "react";
import { Routes, Route } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

//components:
import Login from "./pages/login";
import "./App.css";
import Mainpage from "./pages/mainpage";
import Progressindicator from "./components/progressindicator";



function App() {
  const { error, isAuthenticated,isLoading} = useAuth0();

  error&&
    <div>Authentication failed!</div>;

    !error&&isLoading&&<><Progressindicator/></>

   
  
  return (
   <Routes>
      { !error&&!isLoading&&<Route path="/" element={isAuthenticated?<Mainpage />:<Login />} />}
    
   
    </Routes>
  );
}

export default App;

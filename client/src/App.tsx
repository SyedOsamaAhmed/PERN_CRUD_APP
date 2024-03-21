import React from "react";
import { Routes, Route } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

//components:
import Login from "./pages/login";
import "./App.css";
import Mainpage from "./pages/mainpage";


function App() {
  const { error, isAuthenticated} = useAuth0();

  if (error) {
    <div>{error.message}</div>;
  }
  return (
    <Routes>
      <Route path="/" element={isAuthenticated?<Mainpage />:<Login />} />
    
   
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { TextField, Button, CircularProgress } from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";
import Displaydata from "../components/displaydata";

function Mainpage() {
  const { logout } = useAuth0();
  const [input, setInput] = useState("");

  const onSubmit = async () => {
    try {
   
     
      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post: input,
        }),
      });
      window.location.href = "/";
    } catch (err) {
      err instanceof Error
        ? console.error(err.message)
        : console.log("Unknown error");
    }
  };
  return (
    <div className="main-container">
      <TextField
        id="outlined-basic"
        label="Input"
        type="text"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="btn-container">
        <Button variant="contained" onClick={onSubmit}>
          Save
        </Button>
        <Button variant="contained" onClick={() => logout()}>
          Logout
        </Button>
      </div>

      <Displaydata/>
    </div>
  );
}

export default withAuthenticationRequired(Mainpage, {
  onRedirecting: () => <CircularProgress />,
});

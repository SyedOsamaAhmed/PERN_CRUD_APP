import React, { Fragment } from "react";


import { Button, Container,TextField } from "@mui/material";

function login() {
  return (
    <Fragment>
      <Container>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
      </Container>
    </Fragment>
  );
}

export default login;

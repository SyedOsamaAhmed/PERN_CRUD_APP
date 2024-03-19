const express = require('express');
const cors=require('cors');
const app = express();

//middlewares:
app.use(cors);

app.listen(5000, () => console.log("Server started at port 5000!"));

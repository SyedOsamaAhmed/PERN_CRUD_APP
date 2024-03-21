import express from "express";
import cors from "cors";
import client from "./postgres/config/connection.js";
import bodyParser from "body-parser";

const app = express();

//middlewares:
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/usersdata", (req, res) => {
  client.query("SELECT * from userpost", (err, result) => {
    if (!err) res.send(result.rows);
  });
  client.end;
});
app.get("/usersdata/:id", (req, res) => {
  const id = req.params.id;

  client.query(
    `SELECT * from userpost WHERE user_id=$1`,
    [id],
    (err, result) => {
      if (!err) res.json(result.rows);
    }
  );
  client.end;
});

app.post("/posts", async (req, res) => {
  let values = [];
console.log(req.body.post)
   client.query(
    `INSERT INTO userpost (post) VALUES($1)`,
    (values = [req.body.post]),
    (err, result) => {
      if (!err) res.send("Insertion successful!");
      else console.log(err.message);
    }
  );

  client.end;
});

app.listen(5000, () => console.log("Server started at port 5000!"));

client.connect();

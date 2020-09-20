const mysql = require("mysql");

const express = require("express");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodemysql",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected!");
});

const app = express();

const port = 3000;
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";

  db.query(sql, (err, result) => {
    if (err) throw err;
    else res.send(result);
    console.log(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

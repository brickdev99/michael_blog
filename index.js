const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("combined"));

app.get("/home", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

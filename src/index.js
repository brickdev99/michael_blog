const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const { extname } = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// HTTP loggers
app.use(morgan("combined"));

// Template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news");
});

app.listen(3000);

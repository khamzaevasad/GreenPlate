console.log("start server");
const express = require("express");
const app = express();
const db = require("./server");

// MongoDB

// 1: entered codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: sesion codes

// 3: view codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing codes

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;

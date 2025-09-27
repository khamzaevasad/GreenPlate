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
  db.collection("cards")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something Went Wrong");
      } else {
        // console.log(data);
        res.render("index", { items: data });
      }
    });
});

module.exports = app;

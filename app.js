console.log("start server");
const express = require("express");
const app = express();
const db = require("./server");
const { ObjectId } = require("mongodb");

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

// home
app.get(["/", "/index.ejs"], (req, res) => {
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

// about
app.get("/about.ejs", (req, res) => {
  db.collection("about")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something Went Wrong");
      } else {
        res.render("about", { item: data });
      }
    });
});

// resipes
app.get("/recipes.ejs", (req, res) => {
  db.collection("recipes")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("recipes", { items: data });
      }
    });
});

app.get("/detail/:id", (req, res) => {
  const recipeId = req.params.id;

  db.collection("recipes").findOne(
    { _id: new ObjectId(recipeId) },
    (err, recipe) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Something went wrong");
      }

      if (!recipe) {
        return res.status(404).send("Recipe not found");
      }

      db.collection("recipes")
        .aggregate([
          { $match: { _id: { $ne: new ObjectId(recipeId) } } },
          { $sample: { size: 3 } },
        ])
        .toArray((err, recommended) => {
          if (err) {
            console.log(err);
            return res.status(500).send("Something went wrong");
          }

          res.render("detail", {
            item: recipe,
            items: recommended,
          });
        });
    }
  );
});
module.exports = app;

console.log("Start");
const express = require("express");
const app = express();
const http = require("http");

// 1: entered
app.use(express.static("client"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code

// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
app.get("/", (req, res) => {
  res.end("Hello world");
});

const server = http.createServer(app);
let PORT = 3200;
server.listen(PORT, () => {
  console.log(`The server is running Successfuly on port: ${PORT}`);
});

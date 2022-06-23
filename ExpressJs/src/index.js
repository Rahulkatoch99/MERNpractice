const express = require("express");
const app = express();
const path = require("path");

// //relative path
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "..", "public");

//built in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(3000, "localhost", () => {
  console.log("listing the port of 3000");
});

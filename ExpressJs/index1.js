const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");

const partialspath = path.join(__dirname, "views", "Partials");

const staticPath = path.join(__dirname, "public");

//built in middleware
app.use(express.static(staticPath));
//to set the view engine

app.set("view engine", "hbs");
hbs.registerPartials(partialspath);

//template engine route

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "home.html"));
// });

app.get("/about", (req, res) => {
  res.render("about");
});

// those page whose not exiti for 404 page error

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "this page could not found",
  });
});

app.listen(port, "localhost", () => {
  console.log(`listing to the port ${port}`);
});

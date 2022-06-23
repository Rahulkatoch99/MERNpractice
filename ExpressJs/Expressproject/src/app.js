const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const fs = require("fs");

const pathmod = path.join(__dirname, "..", "public");

app.use(express.static(pathmod));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("welcomd this is a home page");
});

app.get("/about", (req, res) => {
  res.render("index");
});

app.get("/temp", (req, res) => {
  res.send("welcomd this is a a weather page");
});

// app.get("*", (req, res) => {
//   res.send("404 error page");
// });

//get to the form

app.get("/form", (req, res) => {
  const read = fs.readFileSync("form.json", { encoding: "utf8", flag: "r" });
  console.log(read);
  res.send(read);
});

app.post("/form", (req, res) => {
  fs.writeFileSync("form.json", JSON.stringify(req.body));
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, "localhost", (req, res) => {
  console.log(`listing to the port ${port}`);
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my page");
});

app.get("/about", (req, res) => {
  res.status(200).send("this is about page");
  //   console.log(req);
});

app.get("/temp", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "rahul katoch",
    },
  ]);
  //   console.log(req);
});

app.listen(3000, "localhost", () => {
  console.log(`listing to the port.... 3000`);
});

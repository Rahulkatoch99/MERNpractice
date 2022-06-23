const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/project", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`connection sccessfull`);
  })
  .catch((err) => {
    console.log(err);
  });

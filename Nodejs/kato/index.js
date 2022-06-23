const fs = require("fs");

// fs.writeFile("read.txt", "today is my birthday", (err) => {
//   console.log("file is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", "my namr is rahul katoch", (err) => {
//   console.log(err);
//   console.log("data added successfuly");
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(err);
  console.log(data);
});

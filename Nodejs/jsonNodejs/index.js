const fs = require("fs");
const bioData = {
  name: "rahul katoch",
  age: 20,
  educuation: "b.tech",
  interest: "football",
};

// console.log(bioData);

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

const objData = JSON.parse(jsonData);
// console.log(objData);

// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log(err);
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  //   console.log(err);
  //   console.log(data);
  const originaldata = JSON.parse(data);
  console.log(originaldata);
});

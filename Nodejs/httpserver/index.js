const fs = require("fs");
const http = require("http");
const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
const orgi = JSON.parse(data);

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("hello from the other side");
  } else if (req.url == "/about") {
    res.end("this is about page");
  } else if (req.url == "/contact") {
    res.end("thi is contact page");
  } else if (req.url == "/user") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(orgi.name);

    // console.log(data);
  } else {
    res.writeHead(404);
    res.end("404 clint error please check the url}");
  } //   console.log(req);
  //   console.log(res);
});

server.listen(3000, "localhost", () => {
  console.log("listening to the port no 3000");
});

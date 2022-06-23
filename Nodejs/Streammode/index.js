const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return;
  //     console.error(err);
  //     res.end(data.toString());
  //   });

  const rstream = fs.createReadStream("input.txt");

  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });

  //   rstream.on("end", () => {
  //     res.end();
  //   });

  //3rd way

  rstream.pipe(res);
});

server.listen(3000, "localhost");

const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("sayMyName", () => {
//   //   console.log(err);
//   console.log("my name is rahul katoch");
// });

// event.on("sayMyName", () => {
//   //   console.log(err);
//   console.log("my name is ved katoch");
// });

// event.on("sayMyName", () => {
//   //   console.log(err);
//   console.log("my name is bimla katoch");
// });

event.on("checkpage", (sc, msg) => {
  console.log(`success code is ${sc} and the page is ${msg}`);
});
event.emit("checkpage", 200, "ok");

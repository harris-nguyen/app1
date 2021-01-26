const express = require("express");
const app = express();

app.get("/health-check", (req, res) => {
  console.log("health-check works");
  res.send(["server says hiii"]);
});

app.listen(8002, console.log("Listening to 8002!"));

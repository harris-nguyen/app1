const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get(`/health-check`, (req, res) => {
  // checking connection
  res.send(["server is connected"])
})


app.listen(8002, console.log("Listening to 8002!"));

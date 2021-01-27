const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post(`/post`, (req, res) => {
  console.log("post--", req.body);
  const {
    starttime,
    endtime,
    minmagnitude,
    location,
    latitude,
    longitude,
    maxradiuskm,
  } = req.body;

  res.json({
    message: "harris",
    data: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${starttime}&endtime=${endtime}&minmagnitude=5&minmagnitude=1&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${maxradiuskm}`,
  });
});


app.listen(8002, console.log("Listening to 8002!"));

"use strict";

var express = require("express");

var app = express();
var port = 2000 || process.env.PORT;
app.use("/", function (req, res) {
  res.send("hello");
});
app.listen(port, function () {
  console.log("Server in port: ", port);
});
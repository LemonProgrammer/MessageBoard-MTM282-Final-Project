const express = require("express");
const session = require("express-sessions");
const bodyParser = require("body-parser");
const pug = require("pug");
const path = require("path");
const route = require("./routes/routes.js");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname + "/public")));

const urlencodedParser = bodyParser.urlencoded({
  extended: true
});

app.listen(3000);
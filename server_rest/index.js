import {
  getPhotos,
  getByCategory,
  getById,
  addPhoto,
  deletePhoto,
} from "./photoAPI";
import { getCategorys } from "./categoryAPI";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser());

app.get("/photos/list", (req, res) => {
  return res.json(getPhotos());
});

app.get("/photos/filter_category", (req, res) => {
  return res.json(getByCategory(req.query.category));
});

app.get("/photos/filter_id", (req, res) => {
  return res.json(getById(req.query.id));
});

app.post("/photos/add", (req, res) => {
  return res.json(addPhoto(req.body));
});

app.delete("/photos/delete", (req, res) => {
  return res.json(deletePhoto(req.query.id));
});

app.get("/category/list", (req, res) => {
  return res.json(getCategorys());
});

app.listen(3000, () => {
  console.log("http://localhost:3000 REST Server is Running");
});

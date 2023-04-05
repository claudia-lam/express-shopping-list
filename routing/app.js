const express = require("express");
const { NotFoundError } = require("./expressError");
const { items } = require("../fakeDb");
const app = express();

const itemRoutes = require("./itemRoutes");

app.use(express.json());

// apply a prefix to every route in userRoutes
app.use("/items", itemRoutes);















module.exports = app;
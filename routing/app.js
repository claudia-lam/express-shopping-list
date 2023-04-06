const express = require("express");
const { NotFoundError } = require("./expressError");
const { items } = require("../fakeDb");
const app = express();

const itemRoutes = require("./itemRoutes");

app.use(express.json());

// apply a prefix to every route in userRoutes
app.use("/items", itemRoutes);

//if no routes match the route, then throw 404
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});




module.exports = app;
const express = require("express");
const { NotFoundError } = require("./expressError");

const router = new express.Router();
const { items } = require("../fakeDb");


/** GET /items/: returns
 * { items: [
      { name: "popsicle", price: 1.45 },
      { name: "cheerios", price: 3.40 }
      ]
    }
 *
*/

router.get("", function(req, res, next) {
  res.json({items});
});















module.exports = router;

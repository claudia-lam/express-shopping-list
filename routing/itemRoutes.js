const express = require("express");
const { NotFoundError } = require("./expressError");

const router = new express.Router();
let { items } = require("../fakeDb");


/** GET /items/: returns
 * { items: [
      { name: "popsicle", price: 1.45 },
      { name: "cheerios", price: 3.40 }
      ]
    }
 *
*/

router.get("", function(req, res) {
  res.json({items});
});

/** POST : adds to db, returns 201 {item: newItem} */ //TODO:need to include inputs - name, price
//TODO: check if data body even has info, could be empty. Handle error
router.post("", function(req, res){
  // console.log(req.body);
  const newItem = req.body

  items.push(newItem)
  // console.log(items);
  res.status(201).json({added: newItem})

});

/** GET /item/:name: returns item {item} or 404. */

router.get("/:name", function(req, res){

  const name = req.params.name;
  // console.log("name", name);

  //TODO: try the find method
  for(const item of items){
    // console.log("item", item);
    if (name === item.name){
      res.json(item)
    }
  }

  throw new NotFoundError("Item not found!");
});

/** PATCH /item/:name: update name or 404. */

router.patch("/:name", function(req, res) {

  const name = req.params.name;

  for (const item of items) {
    console.log("item", item);
    if (name === item.name) {
      console.log("name", name);
      item.name = req.body.name || item.name;
      item.price = req.body.price || item.price;
      res.status(201).json({updated: item}) //TODO: use default of 200, 201 is create something brand new
    }
  }
  throw new NotFoundError("Item not found!");
})

/** DELETE /item/:name: delete */

router.delete("/:name", function(req, res) {

  const name = req.params.name;

  //TODO: use findIndex and splice
  items = items.filter(item => item.name !== name);
  // console.log(items)
  res.json({message: "Deleted"})

})


module.exports = router;

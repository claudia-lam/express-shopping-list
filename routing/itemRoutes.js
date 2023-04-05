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

router.get("", function(req, res) {
  res.json({items});
});

router.post("", function(req, res){
  // console.log(req.body);
  const newItem = req.body

  items.push(newItem)
  // console.log(items);
  res.status(201).json({added: newItem})

});


router.get("/:name", function(req, res){

  const name = req.params.name;
  console.log("name", name);

  for(const item of items){
    console.log("item", item);
    if (name === item.name){
      res.json(item)
    }
  }

  throw new NotFoundError("Item not found!");
});

//for each obj in array
//  if obj.name === param name
//    return obj
//
//return error














module.exports = router;

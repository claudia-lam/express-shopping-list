const request = require("supertest");

const app = require("../routing/app");
let {items} = require("../fakeDb");

let pickles = { name: "Pickles", price: 1 }

beforeEach(function() {
  items.push(pickles);
});

afterEach(function() {
  // items = [];
  items.length = 0;
});

/** GET /cats - returns `{cats: [cat, ...]}` */

describe("GET /items", function() {
  it("Gets a list of grocery items", async function() {
    const resp = await request(app).get('/items');

    expect(resp.body.items).toContainEqual(pickles);
  });

});





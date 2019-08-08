const assert = require("chai").assert;
const app = require("../app");

describe("App", function() {
  describe("sayHello() tests", function() {
    it("should return hello", function() {
      let result = app.greeting();
      assert.equal(result, "Hello Michael");
    });

    it("should return the type of a string", function() {
      let result = app.greeting();
      assert.typeOf(result, "string");
    });
  });

  describe("addNumbers() tests", function() {
    it("should add the numbers together", function() {
      let result = app.addNumbers(1, 2, 3, 4, 5);
      assert.equal(result, 15);
    });

    it("should return the type of a number", function() {
      let result = app.addNumbers(1, 2, 3, 4, 5, 6);
      assert.typeOf(result, "number");
    });
  });
});

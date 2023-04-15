const assert = require("assert");
const fibonacci = require("../recursion/fibonacci");

describe("Fibonacci tests for integers", function () {
  
  it("Number 0, should return 0", () => {
    const number = 0;
      assert.equal(fibonacci(number), 0);
  });

  it("Number 1, should return 1", () => {
    const number = 1;
      assert.equal(fibonacci(number), 1);
  });

  it("Number 2, should return 1", () => {
    const number = 2;
      assert.equal(fibonacci(number), 1);
  });

  it("Number 10, should return 55", () => {
    const number = 10;
      assert.equal(fibonacci(number), 55);
  });
});
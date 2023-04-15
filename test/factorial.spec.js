const assert = require("assert");
const factorial = require("../recursion/factorial");

describe("Factorial tests for integers", function () {
  
  it("0!, should return 1", () => {
    const number = 0;
      assert.equal(factorial(number), 1);
  });

  it("2!, should return 2", () => {
    const number = 2;
      assert.equal(factorial(number), 2);
  });

  it("3!, should return 6", () => {
    const number = 3;
      assert.equal(factorial(number), 6);
  });

  it("4!, should return 24", () => {
    const number = 4;
      assert.equal(factorial(number), 24);
  });

  it("20!, should return 2432902008176640000", () => {
    const number = 20;
      assert.equal(factorial(number), 2432902008176640000);
  });
});
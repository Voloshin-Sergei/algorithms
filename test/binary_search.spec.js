const assert = require("assert");
const binarySearch = require("../binary_search/binary_search");

describe("Binary search tests for sorted list of numbers (1 - 100)", function () {
  const numbersList = [];
  for (let i = 1; i <= 100; i += 1) {
    numbersList.push(i);
  }

  it("current 0, should return 0", () => {
    const number = 0;
    assert.equal(binarySearch(numbersList, number), number);
  });

  it("current 3, should return 3", () => {
    const number = 3;
    assert.equal(binarySearch(numbersList, number), number);
  });
  
  it("current 31 ,should return 31", () => {
    const number = 31;
    assert.equal(binarySearch(numbersList, number), number);
  });

  it("current 100, should return 100", () => {
    const number = 100;
    assert.equal(binarySearch(numbersList, number), number);
  });
});

describe("Binary search tests for sorted list of numbers (0 - 10)", function () {
  const numbersList = [];
  for (let i = 0; i <= 10; i += 1) {
    numbersList.push(i);
  }

  it("current 0, should return 0", () => {
    const number = 0;
    assert.equal(binarySearch(numbersList, number), number);
  });

  it("current 5, should return 5", () => {
    const number = 5;
    assert.equal(binarySearch(numbersList, number), number);
  });
  
  it("current 7, should return 7", () => {
    const number = 7;
    assert.equal(binarySearch(numbersList, number), number);
  });

  it("current -1, should return 0", () => {
    const number = -1;
    assert.equal(binarySearch(numbersList, number), 0);
  });
});
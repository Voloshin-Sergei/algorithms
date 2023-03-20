const assert = require("assert");
const quickSort = require("../quick_sort/quick_sort");

describe("Quick sort in ascending order tests for unsorted list of numbers", function () {
  
  it("current [0, 1, 2, 3, 4, 5], should return [0, 1, 2, 3, 4, 5]", () => {
    const truthful = [0, 1, 2, 3, 4, 5];
    const numbersList = [0, 1, 2, 3, 4, 5];
    assert.deepEqual(quickSort(numbersList), truthful);
  });

  it("current [5, 4, 3, 2, 1, 0], should return [0, 1, 2, 3, 4, 5]", () => {
    const truthful = [0, 1, 2, 3, 4, 5];
    const numbersList = [5, 4, 3, 2, 1, 0];
    assert.deepEqual(quickSort(numbersList), truthful);
  });
  
  it("current [6, 2, 12, 4, 10, 8] ,should return [2, 4, 6, 8, 10, 12]", () => {
    const truthful = [2, 4, 6, 8, 10, 12];
    const numbersList = [6, 2, 12, 4, 10, 8];
    assert.deepEqual(quickSort(numbersList), truthful);
  });

  it("current [11, 5, 1, 9, 3, 7], should return [1, 3, 5, 7, 9, 11]", () => {
    const truthful = [1, 3, 5, 7, 9, 11];
    const numbersList = [11, 5, 1, 9, 3, 7];
    assert.deepEqual(quickSort(numbersList), truthful);
  });

  it("current [0, -1, -2, -3, -4, -5], should return [-5, -4, -3, -2, -1, 0]", () => {
    const truthful = [-5, -4, -3, -2, -1, 0];
    const numbersList = [0, -1, -2, -3, -4, -5];
    assert.deepEqual(quickSort(numbersList), truthful);
  });
});
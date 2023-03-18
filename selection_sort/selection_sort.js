const selectionSort = (numbersList) => {
  const sortNumbersList = [];

  while (numbersList.length > 0) {
    const smallest = findSmallest(numbersList);
    sortNumbersList.push(numbersList.splice(smallest, 1)[0]);
  }

  return sortNumbersList;
}

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((element, index) => {
    if (element < smallest) {
      smallest = element;
      smallestIndex = index;
    }
  });

  return smallestIndex;
}

module.exports = selectionSort;
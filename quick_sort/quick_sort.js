const quickSort = (numbersList) => {
  if (numbersList.length < 2) return numbersList;

  let pivot = numbersList[0];
  const left = [];
  const right = [];

  for (let i = 1; i < numbersList.length; i++) {
    if (pivot > numbersList[i]) {
      left.push(numbersList[i]);
    } else {
      right.push(numbersList[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

module.exports = quickSort;

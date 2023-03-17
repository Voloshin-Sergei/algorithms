const binarySearch = (numbersList, number) => {
  let low = 0;
  let hight = numbersList.length;
  while (low <= hight) {
  
    let mid = Math.floor((low + hight) / 2);
    let currentNumber = numbersList[mid];

    if (currentNumber === number) {
      return numbersList[mid];
    }

    if (currentNumber > number) {
      hight = mid - 1;
    }

    else {
      low = mid + 1;
    }

  }

  return 0;
}

module.exports = binarySearch;
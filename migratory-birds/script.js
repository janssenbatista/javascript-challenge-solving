function migratoryBirds(arr) {
  arr.sort().reverse();
  // Find distinct elements in arr
  let distinctElements = arr.filter(
    (element, index, arr) => arr.indexOf(element) === index
  );
  // Count the total of each element
  let counter = 0;
  let totalOfEachElement = [];
  distinctElements.forEach((e, index) => {
    for (let i in arr) {
      if (e === arr[i]) {
        counter++;
        totalOfEachElement[index] = counter;
      }
    }
    counter = 0;
  });
  // Find the position of the most frequently bird
  let max = totalOfEachElement[0];
  let position = -1;
  for (const i in totalOfEachElement) {
    if (totalOfEachElement[i] > max) {
      max = totalOfEachElement[i];
      position = i;
    }
    if (totalOfEachElement[i] === max) {
      position = i;
    }
  }
  const mostFrequentlyBirds = distinctElements[position];
  return mostFrequentlyBirds;
}

// Test
let _arr = [1, 2, 3, 3, 4, 1, 5, 1, 1, 6, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2];
console.log(migratoryBirds(_arr)); // should print 1

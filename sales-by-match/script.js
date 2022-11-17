function sockMerchant(n, ar) {
  // find unique elements
  let unique = ar.filter((value, index, arr) => arr.indexOf(value) === index);
  // array to store the total of each element
  let totalUnique = unique.map((v) => 0); // initialize array positions with 0
  // find the total of each element
  for (const index in unique) {
    for (let i = 0; i < ar.length; i++) {
      if (ar[i] === unique[index]) totalUnique[index]++;
    }
  }
  // find unpairs elements
  let totalUnpairs = totalUnique.reduce((acc, v) => acc + (v % 2), 0);
  // calculate pairs elements
  let totalPairs = (n - totalUnpairs) / 2;
  return totalPairs;
}

// Test
console.log(sockMerchant(8, [1, 2, 1, 2, 3, 1, 1, 3])); // should print 4

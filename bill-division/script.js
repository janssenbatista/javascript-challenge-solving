function billDivision(bill, k, b) {
  let total = 0;
  for (const index in bill) {
    if (index == k) continue;
    total += bill[index];
  }
  if (total / 2 === b) console.log("Bon Appetit");
  else console.log(bill[k] / 2);
}

// Test
billDivision([3, 10, 2, 9], 1, 12); // should print 5
billDivision([3, 10, 2, 9], 1, 7); // should print Bon Appetit

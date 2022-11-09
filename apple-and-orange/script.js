function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let totalApples = 0;
  let totalOranges = 0;
  for (let i in apples) {
    if (apples[i] <= 0) continue;
    if (apples[i] + a >= s && apples[i] + a <= t) totalApples++;
  }
  for (let i in oranges) {
    if (oranges[i] >= 0) continue;
    if (oranges[i] + b <= t && oranges[i] + b >= s) totalOranges++;
  }
  console.log(totalApples);
  console.log(totalOranges);
}

// Test
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

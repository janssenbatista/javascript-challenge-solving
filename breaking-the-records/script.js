function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let totalBestRecord = 0;
  let totalWorstRecord = 0;
  scores.forEach((e) => {
    if (e < min) {
      min = e;
      totalBestRecord++;
    }
    if (e > max) {
      max = e;
      totalWorstRecord++;
    }
  });
  return [totalWorstRecord, totalBestRecord];
}

// Test
console.log(breakingRecords([10, 5, 5, 20, 4, 5, 2, 25, 1])); // should print [2, 4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // should print [4, 0]

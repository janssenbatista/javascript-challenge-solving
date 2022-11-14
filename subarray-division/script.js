function birthdays(s, d, m) {
  let totalBirthdays = 0;
  let limit = m;
  for (let index = 0; index <= s.length - m; index++) {
    let sum = s.slice(index, limit).reduce((acc, i) => acc + i);
    if (sum === d) totalBirthdays++;
    limit++;
  }
  return totalBirthdays;
}

console.log(birthdays([2, 2, 1, 3, 2], 4, 2)); // should return 2
console.log(birthdays([1, 2, 1, 3, 2], 3, 2)); // should return 2
console.log(birthdays([1, 1, 1, 1, 1], 3, 2)); // should return 0

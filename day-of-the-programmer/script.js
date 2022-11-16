function dayOfTheProgrammer(year) {
  let february;
  if (year <= 1917 && year % 4 === 0) february = 29;
  else if (
    year >= 1919 &&
    (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
  )
    february = 29;
  else february = 28;
  let totalDayOfEachMonth = [31, february, 31, 30, 31, 30, 31, 31]; // jan, feb, mar, apr, may, jun, jul, aug
  let dayOfSeptember = 256 - totalDayOfEachMonth.reduce((acc, v) => acc + v);
  if (year === 1918) return `${dayOfSeptember + 13}.09.${year}`;
  else return `${dayOfSeptember}.09.${year}`;
}

// Test
console.log(dayOfTheProgrammer(2017)); // should print 13.09.2017
console.log(dayOfTheProgrammer(2016)); // should print 12.09.2017
console.log(dayOfTheProgrammer(1918)); // should print 26.09.2017

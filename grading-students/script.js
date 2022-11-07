function gradingStudents(grades) {
  let ns = [];
  for (let i in grades) {
    let n = grades[i];
    let x = -1;
    let diff = 0;
    while (x != 0) {
      if (n % 5 == 0) x = 0;
      else {
        n++;
        diff++;
      }
    }
    if (n < 40 || diff >= 3) n -= diff;
    ns.push(n);
  }
  return ns;
}

// Test
console.log(gradingStudents([73, 67, 38, 33]));

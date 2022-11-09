function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1) return "NO";
  while (x1 < x2) {
    x1 += v1;
    x2 += v2;
  }
  if (x1 === x2) return "YES";
  console.log("Chegou aqui");
  return "NO";
}

// Test
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 2, 1, 2));
console.log(kangaroo(4523, 8092, 9419, 8076));

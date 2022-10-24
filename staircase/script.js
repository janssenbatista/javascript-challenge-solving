function staircase(n) {
  let stairs = [];
  for (let i = 0; i < n; i++) {
    stairs[i] = " ";
  }

  for (let i = n - 1; i >= 0; i--) {
    stairs[i] = "#";
    console.log(stairs.join(""));
  }
}

// Test
staircase(6);

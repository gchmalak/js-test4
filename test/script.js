function fibonacci(n) {
  let result = [];

  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);

    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}
// fabioanacci function

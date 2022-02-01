const fib = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) +
      fib(n - 2);
  }
}
console.log('F-B-5', fib(5))
console.log('F-B-12', fib(12))
console.log('F-B-25', fib(25))
// function fib(x) {
//   if (x === 0 || x === 1) return x;

//   return fib(x - 1) + fib(x - 2);
// }

// console.log(fib(10));
// let x = 0;
// function callme() {
//   x++;
//   if (x == 3) return "asda";
//    callme();
// }

// console.log(callme());

const loopNtimes = (n) => {
  if (n === 0) return n;
  // console.log(n);
  return loopNtimes(n - 1);
};
console.log(loopNtimes(10));

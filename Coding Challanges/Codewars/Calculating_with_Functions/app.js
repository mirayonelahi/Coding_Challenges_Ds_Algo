/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero(cb) {
  if (cb === undefined) return 0;
  return calculate(cb, 0);
}
function one(cb) {
  if (cb === undefined) return 1;

  return calculate(cb, 1);
}
function two(cb) {
  if (cb === undefined) return 2;

  return calculate(cb, 2);
}
function three(cb) {
  if (cb === undefined) return 3;

  return calculate(cb, 3);
}
function four(cb) {
  if (cb === undefined) return 4;

  return calculate(cb, 4);
}
function five(cb) {
  if (cb === undefined) return 5;

  return calculate(cb, 5);
}
function six(cb) {
  if (cb === undefined) return 6;

  return calculate(cb, 6);
}
function seven(cb) {
  if (cb === undefined) return 7;

  return calculate(cb, 7);
}
function eight(cb) {
  if (cb === undefined) return 8;

  return calculate(cb, 8);
}
function nine(cb) {
  if (cb === undefined) return 9;

  return calculate(cb, 9);
}

function calculate(cb, number) {
  switch (cb[0]) {
    case "*":
      return number * cb[1];
    case "/":
      return parseInt(number / cb[1]);
    case "+":
      return number + cb[1];
    case "-":
      return number - cb[1];
  }
}

function plus(cb) {
  return ["+", cb];
}
function minus(cb) {
  return ["-", cb];
}
function times(cb) {
  return ["*", cb];
}
function dividedBy(cb) {
  return ["/", cb];
}

console.log(three(plus(seven())));

// TYPESCRIPT INTRO

// Why do we need typescript?

function sum(x, y) {
  return x + y;
}

// The 'sum' function in this case, can take any type of argument be it a number, a string or an object.
// This could lead to problems down the line, especially as the project grows.
// e.g,. :
sum(1, 9);
sum('hello', 0);
sum([], undefined);

// Solution:
function sumNumber(x: number, y: number): number {
  return x + y;
}

// Using typescript, we define that the 'sum' function takes two numbers and returns one.
// Allowing for compile time, type checks
// NOTE: This does not check types at runtime, so it is technically still possible to pass a
//  string to the function.

sumNumber(1, 5);

// @ts-expect-error (Argument of type 'string' is not assignable to parameter of type 'number'.)
sumNumber('hello', 0);

// @ts-expect-error (Argument of type '{}' is not assignable to parameter of type 'number'.)
sumNumber(7, {});

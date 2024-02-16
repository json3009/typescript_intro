// Type Assertion (Type Casting)

// Type assertion is a way to tell the compiler “trust me, I know what I’m doing.”
// It’s like a type cast in other languages, but it performs no special checking or restructuring of data.
// It has no runtime impact, and is used purely by the compiler.
// TypeScript assumes that you, the programmer, have performed any special checks that you need.

// Type assertions have two forms. One is the “angle-bracket” syntax:

const someValue: unknown = 'this is a string';

const strLength: number = (<string>someValue).length;

// And the other is the as-syntax:

const someValue2: unknown = 'this is a string';

const strLength2: number = (someValue2 as string).length;

// The two samples are equivalent. Using one over the other is mostly a choice of preference.

// --------------------------------------------------
// Constant Assertions

// A constant assertion is an assertion which specifies that an expression’s value will be constant when
//  evaluated. When a variable has a constant assertion, TypeScript assumes that the variable’s value
//  will never change, and that it won’t be reassigned. For example:

const foo1 = [1, 2, 3, 4]; // foo: number[]
const foo2 = [1, 2, 3, 4] as const; // foo: readonly [1, 2, 3, 4]

// The type of foo is number[], while the type of foo2 is readonly [1, 2, 3, 4]. The const assertion
//  on foo2 takes advantage of a new behavior in TypeScript 3.4.

// This is particularly useful when infering types. Example with an object:

const obj = {
  foo: 123,
  bar: 456,
};

const obj2 = {
  foo: 123,
  bar: 456,
} as const;

// The type of obj is { foo: number; bar: number },
// while the type of obj2 is { readonly foo: 123; readonly bar: 456 }.

type allValuesOfObj = typeof obj[keyof typeof obj]; // number
type allValuesOfObj2 = typeof obj2[keyof typeof obj2]; // 123 | 456

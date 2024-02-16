// Typescript infer keyword

// The infer keyword is used in conditional types to infer the type of a type parameter from another type parameter.
// It is used to infer the type of a type parameter from another type parameter.

// Example:

type PromiseReturnType<T> = T extends Promise<infer U> ? U : never;

type promiseReturn = PromiseReturnType<Promise<string>>; // string

// The type PromiseReturnType<T> is a conditional type that checks if the type T extends a Promise.
// If it does, the type is set to the type of the resolved value of the Promise, otherwise it is set to never.

// --------------------------------------------------

// Using the infer keyword, we can create complex conditional types that infer the type of a type parameter from another type parameter.

// Complex Example:
type Split<S extends string, D extends string> = string extends S
  ? string[] // If S is a string, set the type to string[]
  : S extends ''
  ? [] // If S is an empty string, set the type to an empty array
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>] // If S is not an empty string, split it into an array
  : [S]; // If S is not a string, set the type to an array with S as the only element

type SplittedLiteral = Split<'hello-world-this-is-a-test', '-'>; // ["hello", "world", "this", "is", "a", "test"]

// we can then use the resulting type array to create literals.
type Literals = SplittedLiteral[number]; // "hello" | "world" | "this" | "is" | "a" | "test"

// --------------------------------------------------

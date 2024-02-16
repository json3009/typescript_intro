// Typescript conditional Type generics

// Conditional types are a powerful feature of TypeScript that allow us to create generic types that are conditional on other types.

// Example:

type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // TRUE
type B = IsString<10>; // FALSE

// The type IsString<T> is a conditional type that checks if the type T extends string.
// If it does, the type is set to true, otherwise it is set to false.

// --------------------------------------------------

// We can also use conditional types to create a type that returns the type of the first element of an array.

// Example:

type FirstElement<T extends any[]> = T extends [] ? never : T[0];

type C = FirstElement<[1, 2, 3]>; // 1
type D = FirstElement<[]>; // never

// The type FirstElement<T> is a conditional type that checks if the type T extends an empty array.
// If it does, the type is set to never, otherwise it is set to the type of the first element of the array.

// --------------------------------------------------

// We can also use conditional types to create a type that returns the type of the last element of an array.

// Example:

type LastElement<T extends any[]> = T extends []
  ? never // If T is an empty array, set the type to never
  : T extends [...any[], infer U]
  ? U // U is the type of the last element of the array
  : never; // If T is not an array, set the type to never

type E = LastElement<[1, 2, 3]>; // 3
type F = LastElement<[]>; // never

// The type LastElement<T> is a conditional type that checks if the type T extends an empty array.
// If it does, the type is set to never, otherwise it is set to the type of the last element of the array.
// Note that we use the infer keyword to infer the type of the last element of the array. `Infer` will be seen in the
// next section.

// --------------------------------------------------

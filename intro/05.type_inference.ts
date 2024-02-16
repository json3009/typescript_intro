// Type Inference

// Type inference is a tool that the TypeScript compiler uses to infer types when there is no explicit
// information available in the form of type annotations.

// TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

// For example, the following code snippet has no type annotations for the variables:

let x = 3; // Type inferred as number
let y = [0, 1, 9]; // Type inferred as number[]
let z = ['hello', 10]; // Type inferred as (string | number)[]

let xx = 3 as const; // Type inferred as 3
let yy = [0, 1, 9] as const; // Type inferred as readonly [0, 1, 9]
let zz = ['hello', 10] as const; // Type inferred as readonly ["hello", 10]

// TypeScript infers the types of the variables x and y as number and number[] respectively.

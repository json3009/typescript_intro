// typeof operator

// The typeof operator returns the type of a variable or expression.
// The syntax is: typeof x, where x is a variable.

const num = 1;

type numType = typeof num; // number

// --------------------------------------------------
// keyof operator

// The keyof operator returns the union of literal types that represent the keys of an object type.
// The syntax is: keyof T, where T is an object type.

type allKeys = keyof { a: 1; b: 2 }; // "a" | "b"

// To retrieve all keys of an object type, you use the keyof operator with the typeof operator.

const someObject = {
  name: 'John',
  age: 30,
};

type allKeysOfCustomObject = keyof typeof someObject; // "name" | "age"

// keyof operator can be used on almost anything, even primitive types, such as string, number, boolean, and symbol.

type myNumberKeys = keyof number;
// "toString" | "toLocaleString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf"

// The usage of the keyof operator on primitive types is rarely used in practice, but can become handy in
// some situations.

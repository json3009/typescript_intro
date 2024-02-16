// Type declarations

// Type declarations are a powerful way to provide type information to the compiler.
// They are used to describe the shape of an object, function, or class.
// They are also used to provide type information for external libraries that are not written in TypeScript.

// Example:

// 1. Type declarations for an object

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John',
  age: 30,
};

// 2. Type declarations for a function

type Mul = (x: number, y: number) => number;

const mul: Mul = (x, y) => {
  return x + y;
};

// 3. Type declarations for a class

// An interface could also be used here
type Person2 = {
  name: string;
  age: number;
};

class PersonClass implements Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

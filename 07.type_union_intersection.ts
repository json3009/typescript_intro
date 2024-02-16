// Type Union and Intersection

// Type union and intersection are two advanced type operators in TypeScript.
// They are used to combine one or more types.

// --------------------------------------------------
// Type Union

// Type union is used to combine two or more types.
// It is denoted by the pipe (|) symbol.

type StringOrNumber = string | number;

let stringOrNumber: StringOrNumber = 10;
stringOrNumber = 'hello';

// The type of the variable stringOrNumber is a union of string and number.

// What about objects?

type dog = {
  type: 'dog';
  name: string;
  bark: () => void;
};

type cat = {
  type: 'cat';
  name: string;
  meow: () => void;
};

type animal = dog | cat;

const dogOrCat: animal = {
  type: 'cat',
  name: 'lara',
  meow: () => {},
};

dogOrCat.meow();

// @ts-expect-error (Property 'bark' does not exist on type 'cat'.)
dogOrCat.bark();

// --------------------------------------------------
// Type Intersection

// Type intersection is used to combine two or more types.
// It is denoted by the ampersand (&) symbol.

type EntityData = {
  name: string;
  age: number;
};

type EmployeeData = {
  company: string;
};

type Employee = EntityData & EmployeeData;

const employee: Employee = {
  name: 'John',
  age: 30,
  company: 'Apple',
};

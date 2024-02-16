// Generics

// Generics are used to create reusable components.
// They are like function arguments.
// They allow us to create a component that can work over a variety of types rather than a single one.

// Example:

// Without generics
function identity(arg: number): number {
  return arg;
}

// With generics
function identity2<T>(arg: T): T {
  return arg;
}

// The type of T is decided by the caller of the function.
// The compiler infers the type of T by the type of the argument passed to the function.

// Example:

// The type of T is inferred to be number
const output = identity2(10);

// The type of T is inferred to be string
const output2 = identity2('hello');

// The type of T is inferred to be boolean
const output3 = identity2(true);

// --------------------------------------------------
// This can be very useful in various scenarios.
// For example, we can create a function that takes an array of any type and returns the first element of the array.

// Without generics
function firstElement(arr: any[]) {
  return arr[0];
}

// With generics
function firstElement2<T>(arr: T[]): T {
  return arr[0];
}

// The type of T is inferred to be number
const output4 = firstElement2([1, 2, 3]);

// The type of T is inferred to be string
const output5 = firstElement2(['hello', 'world']);

// Fancy example:

// The type of T is infered to the type of the literal first element of the array
function firstElementFancy<const T extends readonly any[]>(arr: T): T[0] {
  return arr[0];
}
// The type of T is inferred to be `1`
const output6 = firstElementFancy([1, 2, 3]);

// The type of T is inferred to be `hello`
const output7 = firstElementFancy(['hello', 'world']);

// --------------------------------------------------
// Another example:

type Horse = {
  name: string;
  age: number;
};

// Without generics

async function requestHelper(url: string): Promise<any> {
  try {
    return fetch(url).then((response) => response.json());
  } catch (err) {
    return err;
  }
}

// With generics

async function requestHelper2<T>(url: string): Promise<T> {
  try {
    return fetch(url).then((response) => response.json());
  } catch (err) {
    return err;
  }
}

// The type of T is inferred to be Horse
const horse = requestHelper2<Horse>('https://some-url.lu/horse');

horse.then((data) => {
  console.log(data.name);
  console.log(data.age);
});

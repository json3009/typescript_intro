// Guards

// Guards are functions that help us to determine if an object is of a certain type.
// They are used to narrow down the type of an object within a conditional block.

// In TypeScript, we can return a type predicate from a function.

// Example:

function isString(arg: any): arg is string {
  return typeof arg === 'string';
}

// The return type of the function is a type predicate.
// It is a boolean value that tells the compiler if the argument is of a certain type.

// The type predicate is used in a conditional block to narrow down the type of the argument.

// Example:

function printIfString(arg: any): void {
  // `arg` is of type `any` here

  if (isString(arg)) {
    // `arg` is now of type `string` here
    console.log(arg);
  }
}

// --------------------------------------------------

// This can also be used on objects.

// Example:

type Car = {
  name: string;
  model: string;
  year: number;
};

function isCar(arg: any): arg is Car {
  return arg.name && arg.model && arg.year;
}

function printCar(car: Car): void {
  if (isCar(car)) {
    console.log(car.name, car.model, car.year);
  }
}

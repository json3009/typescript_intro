// Typescript Extends keyword

// The extends keyword is used in generic types to specify the constraint on the type parameter.
// It is used to specify that the type parameter must extend a particular type.

// Example:

// The type parameter T must extend the type object.
function printObject<T extends object>(obj: T) {
  console.log(obj);
}

printObject({ name: 'John', age: 30 });

// @ts-expect-error (Argument of type 'string' is not assignable to parameter of type 'object'.)
printObject('hello');

// --------------------------------------------------

// We can also use the extends keyword to specify that the type parameter must extend a particular primitive type.
function printStringOrNumber<T extends string | number>(obj: T) {
  console.log(obj);
}

printStringOrNumber('hello');
printStringOrNumber(10);

// @ts-expect-error (Argument of type '{}' is not assignable to parameter of type 'string | number'.)
printStringOrNumber({});

// --------------------------------------------------

// We can also use the extends keyword to specify that the type parameter must extend a particular object.
// This is useful when we want to access a property on the object.
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

printName({ name: 'John', age: 30 });

// @ts-expect-error (Property 'name' does not exist on type 'string'.)
printName({ age: 30 });

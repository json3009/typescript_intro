// Unknown versus Any types

// The unknown type is similar to the any type, but more restrictive.
// With the any type, you can access any property or call any method of the value.

// With the unknown type, you can’t access any properties of the value, nor can you call methods on it.
// You have to narrow down the type first before you can access the properties or call the methods of the value.

// The unknown type is useful when you don’t know what the type of the value is but you still want to perform some operations on it.
// For example, you get the value from the user and you want to perform some operations on it.

// The unknown type is a type-safe counterpart of the any type.
// It’s a good practice to use the unknown type instead of the any type because it’s safer.

// Enough theory, let’s see some examples of using the unknown type.

// ANY:
let anyType: any = 45;

anyType = 'hello';

anyType = true;

anyType = {};

// UNKNOWN:
let unknownType: unknown = 45;

unknownType = 'hello';

unknownType = true;

unknownType = {};

// The unknown type is more restrictive than the any type.
// The following statements are valid with the any type but not with the unknown type:

let anyValue: any;

let unknownValue: unknown;

// With the any type, you can access any properties of the value and call any methods of it.
anyValue.foo.bar;

// @ts-expect-error (Object is of type 'unknown'.)
unknownValue.foo.bar;

// To fix this, you need to narrow down the type of the value first before accessing its properties or calling its methods.
// For example, you can use the typeof operator to narrow down the type of the value to a primitive type:

if (typeof unknownValue === 'string') {
  unknownValue.toUpperCase();
}

// Or you can use the instanceof operator to narrow down the type of the value to a class type:

class Foo {
  name: string;
}

const foo: unknown = new Foo();

if (foo instanceof Foo) {
  foo.name;
}

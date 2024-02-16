// Typescript Template Literal Types

// Template literal types are a new feature of TypeScript 4.1 that allow us to create new types from template literal strings.

// Example:

type Greeting = 'Hello, world!';

// The type Greeting is a template literal type that creates a new type from the template literal string "Hello, world!".

// --------------------------------------------------

// We can also use template literal types to create a new type from a template literal string that contains a placeholder.

// Example:

type Greeting2<Name extends string> = `Hello, ${Name}!`;

// The type Greeting2<Name> is a template literal type that creates a new type from the template literal string "Hello, ${Name}!".

type Greeting2Result = Greeting2<'John'>; // "Hello, John!"

// --------------------------------------------------

// We can also use template literal types to create a new type from a template literal string that contains multiple placeholders.

// Example:

type Greeting3<
  Name extends string,
  Age extends number
> = `Hello, ${Name}! You are ${Age} years old.`;

// The type Greeting3<Name, Age> is a template literal type that creates a new type from the template literal string "Hello, ${Name}! You are ${Age} years old.".

type Greeting3Result = Greeting3<'John', 30>; // "Hello, John! You are 30 years old."

// --------------------------------------------------

// We can also use template literal types to mix and match template literal strings and placeholders.

// Example:

type palette = 'primary' | 'secondary' | 'neutral';
type contrast = 1 | 2 | 3;
type types = 'bg' | 'text';

type colors = `${types}-${palette}-${contrast}`;
// The type colors is a template literal type that creates a new type from the template literal string `${types}-${palets}-${contrast}`.

// The type colors is the union of the following types:
//    "bg-primary-1"      | "bg-primary-2"      | "bg-primary-3"      |
//    "bg-secondary-1"    | "bg-secondary-2"    | "bg-secondary-3"    |
//    "bg-neutral-1"      | "bg-neutral-2"      | "bg-neutral-3"      |
//    "text-primary-1"    | "text-primary-2"    | "text-primary-3"    |
//    "text-secondary-1"  | "text-secondary-2"  | "text-secondary-3"  |
//    "text-neutral-1"    | "text-neutral-2"    | "text-neutral-3"    |

// Usage:
function getColor(color: colors) {
  // ...
}

getColor('bg-primary-1'); // OK

getColor('text-secondary-1'); // OK

// @ts-expect-error - Argument of type '"bg-primary-4"' is not assignable to parameter of type 'colors'.
getColor('text-secondary-4');

// --------------------------------------------------
// Color Palette Example

const myColors: {
  [Key in colors]: string;
} = {
  'bg-primary-1': '#f0f8ff',
  'bg-primary-2': '#b0e0e6',
  'bg-primary-3': '#87ceeb',

  'bg-secondary-1': '#ffe4e1',
  'bg-secondary-2': '#fa8072',
  'bg-secondary-3': '#ff6347',

  'bg-neutral-1': '#f5f5dc',
  'bg-neutral-2': '#f5deb3',
  'bg-neutral-3': '#f4a460',

  'text-primary-1': '#000000',
  'text-primary-2': '#000000',
  'text-primary-3': '#000000',

  'text-secondary-1': '#000000',
  'text-secondary-2': '#000000',
  'text-secondary-3': '#000000',

  'text-neutral-1': '#000000',
  'text-neutral-2': '#000000',
  'text-neutral-3': '#000000',

  // @ts-expect-error - Type '"bg-primary-4"' is not assignable to type 'colors'.
  'bg-primary-4': '#000000',
};

// Typescript Mapped Types

// Mapped types are a powerful feature of TypeScript that allow us to create new types from existing types.
// They are similar to generics, but instead of creating a new type from a generic type parameter,
// they create a new type from an existing type.

// Example:

// The type Readonly<T> is a mapped type that creates a new type from the type T.
// It makes all properties of the type T readonly.

type ReadonlyObject<T> = {
  readonly [P in keyof T]: T[P];
};

type G = ReadonlyObject<{ a: string; b: number }>;
// { readonly a: string, readonly b: number }

// --------------------------------------------------

// We can also use mapped types to create a new type from an existing type given some conditions.

// Example:

type StringShouldBeNumber<T> = {
  [P in keyof T]: T[P] extends string ? number : T[P];
};

type H = StringShouldBeNumber<{ a: string; b: number }>;
// { a: number, b: number }

// The type StringShouldBeNumber<T> is a mapped type that creates a new type from the type T.
// It checks if the property type of T extends string, if it does, it sets the property type to number,
// otherwise it sets the property type to the original type.

// We can also go further and include nested properties in the mapped type.

// Example:

type StringShouldBeNumberNested<T> = {
  [P in keyof T]: T[P] extends string
    ? number
    : T[P] extends object
    ? StringShouldBeNumberNested<T[P]>
    : T[P];
};

type I = StringShouldBeNumberNested<{
  a: string;
  b: number;
  c: { d: string; e: boolean };
}>;
// { a: number, b: number, c: { d: number, e: boolean } }

// --------------------------------------------------

// Key <=> Value Object Example:

const routes = {
  '/': { name: 'Home' },
  '/about': { name: 'About' },
  '/contact': { name: 'Contact' },
  '/login': { name: 'Login' },
  '/logout': { name: 'Logout' },
} as const;

type Route = {
  [P in keyof typeof routes as typeof routes[P]['name']]: P;
};

// in the above example, we are creating a new type Route from the type of the routes object.
// The type Route is a mapped type that creates a new type from the type of the routes object.
// It sets the property type to the name of the route and the property value to the route path.

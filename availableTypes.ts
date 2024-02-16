// Typescript available utility types

type r = Partial<{ a: number }>;
// Constructs a type with all properties of T set to optional.

type s = Required<{ a?: number }>;
// Constructs a type consisting of all properties of T set to required.

type t = Readonly<{ a: number }>;
// Constructs a type with all properties of T set to readonly.

type u = Record<'a' | 'b', { a: number }>;
// Constructs a type with a set of properties K of type T.

type v = Pick<{ a: number; b: string }, 'a'>;
// Constructs a type by picking the set of properties K from T.

type w = Omit<{ a: number; b: string }, 'a'>;
// Constructs a type by picking all properties from T and then removing K.

type x = Exclude<'a' | 'b' | 'c', 'a'>;
// Constructs a type by excluding from T all union members that are assignable to U.

type y = Extract<'a' | 'b' | 'c', 'a'>;
// Constructs a type by extracting from T all union members that are assignable to U.

type z = NonNullable<'a' | null | undefined>;
// Constructs a type by excluding null and undefined from T.

type aa = Parameters<(a: number, b: string) => void>;
// Constructs a tuple type from the types used in the parameters of a function type T.

type ab = ConstructorParameters<ErrorConstructor>;
// Constructs a tuple or array type from the types of a constructor function type.

type ac = ReturnType<() => string>;
// Constructs a type consisting of the return type of function T.

type ad = InstanceType<typeof Error>;
// Constructs a type consisting of the instance type of a constructor function type T.

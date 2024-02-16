// TYPESCRIPT TYPES

const number: number = 1;
const string: string = 'hello World';
const boolean: boolean = true;

const any: any = 45;
const any2: any = 'hello';

const array: number[] = [1, 7, 9];
const tuple: [number, number] = [0, 6];

const literals: 1 | 2 | 3 = 1;

const stringObject: Record<string, number> = {
  hello: 1,
  world: 2,
};

const numberObject: Record<number, number> = {
  0: 1,
  1: 2,
};

const customObject: {
  name: string;
  age: number;
} = {
  name: 'John',
  age: 30,
};

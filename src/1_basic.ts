// Boolean
let boo: boolean = false;

// Number
// String

// Array
const numbers: Array<number> = [23, 23, 34, 53, 53];

// Tuple
const tuple: [string, number] = ["hello", 10];

// Any
let any: any = 289;
any = 'aldjf';

// Void


// Null and Undefined

// Never
let t: never;

function fn(): never {
  while(true) {
  }
}

// Object
const object: object = {};

// Type assertions
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;


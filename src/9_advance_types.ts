// 1 intersection type

declare type T1 = {
  mother: string;
};

declare type T2 = {
  father: string;
};

declare type Family = T1 & T2;

const family: Family = {
  mother: 'nope',
  father: '',
}

// 2 union

declare type Parent = T1 | T2;

const guardian: Parent = {
  mother: 'teresa',
}

let yourAddress: {city: string, country: string};

// 3 Type guards

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function typeGuard(animal: Bird | Fish) {
  animal.layEggs();

  if ('fly' in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// 4 type assertions

let bag: null | string = null;

function doSomething(bag: string) {
  console.log(bag);
}

function initialize() {
  bag = 'ram';
}

initialize();
doSomething(bag!);

// 5 literal types

type Frequency = 'hour' | 'minute' | 'second' | 5;


// 6 mapped types

type MakeReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

type MakePartial<T> = {
  [P in keyof T]?: T[P];
}

const partialAnimal: MakePartial<Bird> = {};
let readonlyAnimal: MakeReadonly<Fish> = {
  swim() {

  },
  layEggs() {

  }
};
partialAnimal.fly = function() {

}
// readonlyAnimal.swim = function() {

// }

// 7 looping

type BirdProps = keyof Bird;

type BirdLess = {
  [index in keyof Bird]?: never;
}


const notBird: BirdLess = {};

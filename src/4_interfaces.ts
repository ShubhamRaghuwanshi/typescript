/*
The interface is a set of a rule defined which needs to be implemented by the entity using it.
*/

interface Dimension {
  width: string;
  height: string;
}

let image: Dimension = {
  width: "100px",
  height: "200px"
};

// extra props

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


// 3 optional & exception

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black", width: 20});

// 4 readonly & methods

interface Point {
  readonly address: string;
  readonly age: number;
  name: (firstName: string, lastName: string) => string;
  getAddress(): string;
}

const some: Point = {
  address: "B7", 
  age: 4,
  name(fn: string, ln: string) {
    return fn + ' ' + ln;
  },
  getAddress() {
    return this.address;
  }
}

some.address


// 5 indexing
const a : {
  [key: string]: boolean;
} = {};

const b = a.some;

// interface with a function

interface Faction {
  (): string;
}

const name10: Faction = function() {
  return 'Elf';
}

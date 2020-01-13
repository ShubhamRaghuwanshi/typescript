// Enums
// An enum is an object which has a collection of related values stored together

export enum Directions {
  North  = 'north',
  South = 'south',
  East = 'east',
  West = 'west'
}

const up = Directions.East;

function reverse(direction: Directions) {
  let turn: Directions;
  if (direction === Directions.East) {
    turn = Directions.West;
  } else if (direction === Directions.North) {
    turn = Directions.South;
  } else if (direction === Directions.West) {
    turn = Directions.East;
  } else {
    turn = Directions.North;
  }
  console.log(`Lets go in ${turn!} direction`);
}

reverse(Directions.North);

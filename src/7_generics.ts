/*
Generic:  It creates a component that can work with a variety of data types rather than a single data type.
It allows users to consume these components and use their own type.

*/

function getItems(items: any[] ) : any[] {  
  return new Array().concat(items);  
}

let myNumArr = getItems([10, 20, 30]);  
let myStrArr = getItems(["Hello", "JavaTpoint"]);  
myNumArr.push(40);
myNumArr.push("Hello TypeScript");
myStrArr.push("Hello SSSIT");
myStrArr.push(40);

function getItemsT<T>(items : T[] ) : T[] {  
  return new Array<T>().concat(items);  
}  

// with interfaces
// extends constraints 
interface People {
  name: string
  age: number
}

interface Celebrity extends People {  
  profession: string  
}

function print(theInput: Celebrity): void {

}

function printName<T extends Celebrity>(theInput: T): void {  
  console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);  
}

let player: Celebrity = {
  name: 'Virat Kohli', age: 30, profession: 'Cricket Player'  
}

printName(player);

/*
class: blueprint for creating objects

Fields: variable declared in a class.
Methods: action for the object.
Constructors: responsible for initializing the object in memory.
*/ 

export default class Customer {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
      return this.name;
  }
}

const bart = new Customer('Bart', 88);

console.log(bart.getName());

/*
inheritance: the ability of a program to create a new class from an existing class and acquiring the properties and behaviors of the existing class.
data hiding: access modifiers
only supports single and multi-level inheritance
*/

class Shape { 
  protected area: number;
  constructor(area:number) {   
     this.area = area  
  }   
}

class Circle extends Shape {
  display():void {
     console.log("Area of the circle: " + this.area)   
  };
  getArea(): number {
    return this.area;
  }
}

let obj10 = new Circle(320);   
obj10.display();
console.log(obj10.getArea());

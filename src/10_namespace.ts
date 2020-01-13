namespace StudentSetup {

  export interface StudDetails {
      name: string;
      age: number;
  }

  export function addSpace(str: string) {
      return str.split("").join(" ");
  }

  export class Student implements StudDetails {
      name: string;
      age: number;

      constructor(studentdetails: StudDetails) {
          this.name = studentdetails.name;
          this.age = studentdetails.age;
      }

      getName(): string {
          return this.name;
      }
  }
}

StudentSetup.addSpace('name');

interface some extends StudentSetup.StudDetails {
  
}

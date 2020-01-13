// variables, functions, classes declared in a module are not visible outside the module unless they are explicitly exported

import anyName from './5_classes';

const customer = new anyName('Radhe', 20);

console.log(customer.getName());

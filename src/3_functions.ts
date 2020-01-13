// functions
// set of instructions
// differ with JS functions in argument and return type


function addition(num1: number, num2: number): number {
    return num1 + num2;
}

const addition2 = function(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addition(1, 2));
console.log(addition2(1, 2));

// optional parameter
function getName(firstName: string, lastName?: string): string {
    return firstName + (lastName || '');
}
console.log(getName('Geralt'));

// default parameter
function getNameD(firstName: string, lastName = 'Best'): string {
    return firstName + ' ' + lastName;
}
console.log(getNameD('Emily'));
console.log(getNameD('Emily', 'Rose'));

// arrow function

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        var x = 20;
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13, x};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit + " x: " + pickedCard.x);

// function overloading
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number;};
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x === "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

// Function overloading with a different number of parameters and different types along with the same function name is not supported.

// function display(x:number, y:number):void {  
//     console.log(x + x);  
// }  
  
// function display(x:string): void {  
//     console.log(x);  
// }  
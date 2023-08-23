// task 1
let myage = 23;  
let isStudent = false;  
let myfavoriteColors = ['pink', 'white', 'purple']; 





// task 2

var myString = 'This is a string with both "single" and \'double\' quotes.';

console.log(myString);
 


// task 3

let age = 25;
let isStudent = false;


let resultString = "My age is " + age + " and I am" + (isStudent ? " a student." : " not a student.");

console.log(resultString);


// task 5


let yourFavoriteAnimal = "cat";
let yourFavoriteColor = "blue";


let userFavoriteAnimal = prompt("What is your favorite animal?");
let userFavoriteColor = prompt("What is your favorite color?");


if (userFavoriteAnimal.toLowerCase() === yourFavoriteAnimal && userFavoriteColor.toLowerCase() === yourFavoriteColor) {
    console.log("Wow, we have the same favorite animal and color!");
} else {
    console.log("It looks like our favorite animal and/or color are different.");
}

// task 6

let userInput = prompt("Enter a number:");


let number = parseFloat(userInput);


if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// task 8


let yourValue =  prompt("Enter your value :")
let Value = `${yourValue ? true : false}`
console.log(Value)


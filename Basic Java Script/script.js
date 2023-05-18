//This is an in-comment.
/*This is a multi-line comment*/
//JavaScript Variables
var myName;
var myVar;
myVar = 5;

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

// Declare string Variables
var myName;
var myName = "your name";

//Explore Differences Between the var and let Keywords
var camper = "James";
var camper = "David";
console.log(camper);

// One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations

/*
onst has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

*/ 
const FAV_PET = "Cats";

//Escaping Literal Quotes in Strings
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
//Find the Length of a String
console.log("Alan Peter".length);
//Use Bracket Notation to Find the First Character in a String
//const firstName = "Charles";
const firstLetter = firstName[0];

//Use Bracket Notation to Find the Last Character in a String
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

//tore Multiple Values in one Variable using JavaScript Arrays
const sandwich = ["peanut butter", "jelly", "bread"];
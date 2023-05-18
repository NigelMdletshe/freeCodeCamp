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
const teams = [["Bulls", 23], ["White Sox", 45]];

//Access Array Data with Indexes
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

//Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  /* In this example, subarray has the value [[10, 11, 12], 13, 14], 
  nestedSubarray has the value [10, 11, 12], 
  and element has the value 11 .*/

  //Manipulate Arrays With push Method
  /*An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array. */
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

//Manipulate Arrays With pop Method
/* Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//Manipulate Arrays With shift Method
/* pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.*/
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

//Manipulate Arrays With unshift Method
/*Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array. */

const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift();
ourArray.unshift("Happy");

//After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

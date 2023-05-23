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
// Functions
function functionName() {
    console.log("Hello World");
  }
/*Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:
*/

function testFun(param1, param2) {
    console.log(param1, param2);
  }

testFun("Hello", "World");

//Return a Value from a Function with Return
//We can pass values into a function with arguments.
// You can use a return statement to send a value back out of a function.

function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);

  //Global vs. Local Scope in Functions
  /* It is possible to have both local and global variables with the same name.
  When you do this, the local variable takes precedence over the global variable.
  In this example:*/
  const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

//Assignment with a Returned Value
/* If you'll recall from our discussion about Storing Values with the Assignment Operator, 
everything to the right of the equal sign is resolved before the value is assigned. 
This means we can take the return value of a function and assign it to a variable.
Assume we have defined a function sum which adds two numbers together.*/

//Stand in Line
/* In Computer Science a queue is an abstract Data Structure where items are kept in order.
 New items can be added at the
 back of the queue and old items are taken off from the front of the queue.*/

 /* Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.*/


//Stand in Line
/* In Computer Science a queue is an abstract Data Structure where items are kept in order.
 New items can be added at the back of the queue and old items are taken off from the front
  of the queue.
  Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
  */
function nextInLine(arr, item) {
  // Add the number to the end of the array
  arr.push(item);

  // Remove the first element of the array
  var removedElement = arr.shift();

  return removedElement;
}

//Understanding Boolean Values
/*Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript. */

//Use Conditional logic with if Statements
/* if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}*/
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

//Comparison with the Equality Operator

/* 
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. 
The equality operator compares two values and returns true if they're equivalent or false if they are not.
 Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

*/
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

// Comparison with the Strict Equality Operator
/* Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false*/

//Practice comparing different values
/*
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

 */
typeof 3
typeof '3'

//Comparison with the Inequality Operator
/*The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples */
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

/* Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.*/
// Setup
function testNotEqual(val) {
  if (val!= 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//Comparison with the Strict Inequality Operator
/*The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples */
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

//Comparison with the Greater Than Operator
/*The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples  */
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

//Comparisons with the Logical And Operator
/*
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if */

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

/*This code will return Yes if num is greater than 5 and less than 10. The same logic can be written with the logical and operator. */
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

//Comparisons with the Logical Or Operator

/*The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints  */

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

/* This code will return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator. */
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//Introducing Else Statements
/* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.*/

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

//Introducing Else If Statements
/* If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.*/
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

//Logical Order in If Else Statements

/* Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first: */

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

// And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

//Chaining If Else Statements
/* if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:*/

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3

} else {
  statementN
}

// Golf Code
/* In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer 
is expected to make in order to sink the ball in the hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according 
to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
    return "Hole-in-one!";
  }else if(strokes<= par - 2 ){
    return "Eagle";
  }else if(strokes == par - 1){
    return "Birdie";
  }else if(strokes == par){
    return "Par";
  }else if(strokes == par + 1){
    return "Bogey";
  }else if(strokes == par + 2){
    return "Double Bogey";
  } else{

  return "Change Me";}
  // Only change code above this line
}

golfScore(5, 4);

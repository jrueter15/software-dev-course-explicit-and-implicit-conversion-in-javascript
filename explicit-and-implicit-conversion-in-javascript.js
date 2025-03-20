/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // 5 was a string, so we converted it to a number
console.log("The result is: " + result);

let isValid = true; // changing the string "false" to a boolean value yielded true 
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // 25 was a string, so we converted it to a number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

console.log(10 + true); // true is converted to 1 then added to 10

let teamNum = "68"
let convertedNum = Number(teamNum);
let winner = convertedNum - 67;
console.log("There can only be: " + winner + " winner!");

console.log(null > 0);  // null is converted to 0
console.log(null == 0); // false, null is not equal to 0
console.log(null >= 0); // true, null is converted to 0

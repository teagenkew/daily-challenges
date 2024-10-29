/*
Remember the goal is to show your thought process and how your arrive to a solution. Does not have to be semantic code but better if you can. 

Tips from the lecture Morning Challenges slides:  
Think about the question and what is being asked of you
Determine the important factors of the question and what type of result you should be delivering
Can clarify the requirements of the question by writing an input/output or starting values/finishing values
Write your solution in plain english before attempting to write a code solution. 
*/

// ================== removeFirstAndLast =====================

// Question:
// Create a function that removes the first and last characters of a word.

// ==========================================================
// Add your solutions below with your name and solution.

// input: string "hello"
// output: string without first and last letters "ell"

// steps: convert string to array,
// then remove first and last element fo array
// convert array back into string

function removeFirstAndLast(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "please enter a word";
  } else {
    let stringArray = str.split("");
    stringArray.shift();
    stringArray.pop();
    let completedArray = stringArray.join("");
    return completedArray;
  }
}
console.log(removeFirstAndLast(4));

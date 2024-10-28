// ================== isNumber =====================

// Question:
// Write a function that checks if all items in an array are numbers. Return a boolean.

// ==============================================

// input - array
// output - true/false
// declare variable to keep track of true/false
// loop through array, check type of each element. As soon as one is not number, change the variable to false.
// Return the boolean variable.

function isNumber(array) {
  let isNum = true;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") {
      isNum = false;
    }
  }

  return console.log(`array contains only numbers: ${isNum}`);
}

testArray = [1, 2, 3, true];
isNumber(testArray);

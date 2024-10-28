// ================== isNumber =====================

// Question:
// Write a function that checks if all items in an array are numbers. Return a boolean.

// ==============================================

// input - array
// output - true/false

function isNumber(array) {
  let isNum = true;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") {
      isNum = false;
    }
  }

  return console.log(`array contains only numbers: ${isNum}`);
}

testArray = [1, 2, 3, true];
isNumber(testArray);

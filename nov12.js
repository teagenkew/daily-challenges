/* 
Write a function that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.
The array will always include 9 integers, with one integer between the numbers of 0 and 9 (inclusive) missing.
*/

//input: [0, 1, 3, 4, 5, 6, 7, 8, 9]
// output: 2

// function findMissing(array) {
//  sort array
//  for (let i=0, i++, i=array.length)
//      check if array[i]= i
//      if not, return i
//
// }

function findMissing(inputArray) {
  inputArray.sort((a, b) => a - b);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== i) {
      return i;
    }
  }
}
console.log(findMissing([0, 1, 5, 6, 7, 8, 9, 3, 4]));

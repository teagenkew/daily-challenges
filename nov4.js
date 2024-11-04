// ================== countArray =====================

// Question:
// Given an array of integers, return an array where the first element is the count of positives numbers and the second element is sum of negative numbers.

// ===================================================

// input: [2,4,-8,-2]
// output: [6, -10]
/*
function countArray(array){
    const posCount = 0
    const negCount = 0 
    loop through each element in array.
        if positive (>0) add +1 to posCount 
        if negative (<0) add number value to negative count 
    
    return [posCount, negCount]

}
*/

function countArray(inputArray) {
  let posCount = 0;
  let negSum = 0;
  inputArray.forEach((element) => {
    if (element > 0) {
      posCount += 1;
    } else if (element < 0) {
      negSum += element;
    }
  });
  return [posCount, negSum];
}

console.log(countArray([1, 2, 3, 0, -4, -5]));

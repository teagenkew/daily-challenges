// ================== findSmallestInteger =====================

// Question:
// Given an array of integers, find the smallest integer.

// ============================================================

// input = [1, 2, 3,]
// output = "smallest integer": 1
// can use math.min function but alternatively..


// ---------- Teagen -----------
function findSmallest(inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    return "Please enter a valid array. :)";
  }
  let minNumber = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < minNumber) {
      minNumber = inputArray[i];
    }
  }
  return minNumber;
}


arraytest = [4, 7, 2, 9];
arraytest2 = [5, 4, 3, 2, 1];
arraytest3 = "heelllooo";

console.log(findSmallest(arraytest3));

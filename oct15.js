// // ================ sumAllItems =========================

function sumAllItems(array) {
  if (array.length === 0) {
    return [];
  }

  let sum = 1;
  for (let i = 0; i < array.length; x++) {
    sum += sum[i];
  }
  console.log(sum);
}
console.log(sumAllItems([1, 2, 3, 4]));

// // =====================================================

// // List changes made below:

// line 9: in for loop, change x++ to i++.
// line 8: let sum = 1 shouldn't be there because if 1 is not in the array this is incorrect.
// line 8: could do let sum = array[0]
// line 9: then change for loop for (let i=1) to start from next element in array
// line 10: sum is not an array so that should be array[i]
// line 12: instead of console.log(sum) we should instead return sum.

const newSumAllItems = (array) => {
  if (array.length === 0) {
    return 0;
  }

  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(newSumAllItems([1, 2, 3, 4]));

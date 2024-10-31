// Problem:
// It's Halloween night, and you have several bags of candies from different houses.
//Each bag contains a list of candies with different types. Your job is to calculate the total number of each type of candy you collected and print the intermediate candy count after each bag is processed.
// Write a function, countCandies(bags), that takes in an array of bags.
//Each bag is represented by an array of strings, where each string is a type of candy.
//The function should return an object where the keys are candy types and the values are the total count of each type of candy.
//Additionally, print out the count of each type after processing each bag.
//const bags = [
//   ["chocolate", "candy corn", "chocolate"],
//   ["gummy bear", "chocolate", "candy corn"],
//   ["lollipop", "chocolate", "lollipop"]
// ];
//Processing bag 1: ["chocolate", "candy corn", "chocolate"]
// Current candy counts: { chocolate: 2, candy corn: 1 }
// Processing bag 2: ["gummy bear", "chocolate", "candy corn"]
// Current candy counts: { chocolate: 3, candy corn: 2, gummy bear: 1 }
// Processing bag 3: ["lollipop", "chocolate", "lollipop"]
// Current candy counts: { chocolate: 4, candy corn: 2, gummy bear: 1, lollipop: 2 }
// Final candy counts: { chocolate: 4, candy corn: 2, gummy bear: 1, lollipop: 2 }

/* pseudo code: 
function countCandies(bags){
    declare object: {}
    scan array element 0 (the first array), 
    check if the elements of this array are included in the object or not 
    if not, add the element to the object, with count of 1 
    if already there add +1 to value. 
}
 */

function countCandies(bags) {
  let inventory = {};
  for (let i = 0; i < bags.length; i++) {
    for (let j = 0; j < bags[i].length; j++) {
      if (inventory[bags[i][j]] === undefined) {
        inventory[bags[i][j]] = 1;
      } else {
        inventory[bags[i][j]] += 1;
      }
    }
  }
  return inventory;
}

const bags = [
  ["chocolate", "candy corn", "chocolate"],
  ["gummy bear", "chocolate", "candy corn"],
  ["lollipop", "chocolate", "lollipop"],
];

console.log(countCandies(bags));

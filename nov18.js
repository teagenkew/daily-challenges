// Given a string, you have to return a string where each letter in a word is duplicates
// For example, ("Hello World" --> "Hheelllloo Wwoorrlldd")

function doubleLetters(inputString) {
  const doubledArray = inputString.split("").map((letter) => letter + letter);
  const doubledString = doubledArray.join("");
  return doubledString;
}

console.log(doubleLetters("Hello"));
 // doesn't account for capital letters 
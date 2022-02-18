// var numbers = [3, 56, 2, 48, 5];

// //Loop type 1

// function double(x) {
//   return x * 2;
// }
// const newNumber = numbers.map(double);

// Loop type 2
// var numbers = [3, 56, 2, 48, 5];
// var newNumber = [];
// numbers.forEach(function double(x) {
//   newNumber.push(x * 2);
// });

//Problem is that everytime we create a {.forEach}
//we have to create an empty array and have to push it.

//Loop type 3 [Preferred]
// var numbers = [3, 56, 2, 48, 5];
// const newNumber = numbers.map(function(x){
//     return x * 2;
// });
// console.log(newNumber);

///////////////////////////////Filter/////////////////////////////////////

// var numbers = [3, 56, 2, 48, 5];

// // Filter Type 1

// const newNumber = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

//Filter type 2
// var numbers = [3, 56, 2, 48, 5];
// var newNumber = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumber.push(num);
//   }
// });
// console.log(newNumber);
/////////////////////////////Reduce/////////////////////////////////////////////

// Reduce type 1
// var numbers = [3, 56, 2, 48, 5];
// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber);
//We are able to add the array elements reducing the array
//This function goes through each "currentNumber" and adds them step by
//step to {newNumber}

//Reduce type 2 [Reduce Function]

// var numbers = [3, 56, 2, 48, 5];

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator= " + accumulator); //This will help explain how the function loops through
//   console.log("currentNumber= " + currentNumber);

//   return accumulator + currentNumber;
// })
// console.log(newNumber);

//////////////////////////////////Find////////////////////////////////////////////////////////////////////

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find(function (num) {
//   return num > 10; //Unlike the filters it doesn't loop through but the moment
//   //the return type is true it will stop!
// });
// console.log(newNumber);
////////////////////////////Find Index///////////////////////////////////////////////////////////////////////////
// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
  //Maps the array from emojipedia.js from which it takes
  //the "meaning" arrays all of them and return them in a limit
  //of 0 - 100 which can hold all the arrays and theirs letters in
});

console.log(newEmojipedia);

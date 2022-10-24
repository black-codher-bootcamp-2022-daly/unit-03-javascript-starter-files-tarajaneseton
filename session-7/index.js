// ****************************************************TASK 1****************************************************
// const animals = ["dog", "cat", "mouse"];
// const ages = [2, 4, 5, 6];

// // const people = [personA, personB, personC];

// // for (let index = 0; index < animals.length; index++) {
// //   const animal = animals[index];

// animals.push('llama')
// animals.unshift('cow')

// animals.pop();

//   console.log(animals)

 
const names = ["tara", "jessica", "jazz", "delilah", "seb", "issac", "will", "marvin", "oyin", "abdul"];

names.sort().reverse();

console.log(names)














// ****************************************************TASK 2****************************************************











// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}

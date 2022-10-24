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

 
// const names = ["tara", "jessica", "jazz", "delilah", "seb", "issac", "will", "marvin", "oyin", "abdul"];

// names.sort().reverse();

// console.log(names)

// const numbers = ["5", "325", "67", "100000", "150"];

// numbers.sort();

// console.log(numbers)

// const animals = ["dog", "cat", "snail", "mouse", "snake"];

// function filterOutSS(animal) {
//   return animal !== 'snail' && animal !== 'snake'
// }
// const animalWithLegs = animals.filter(filterOutSS);
// const animalWithoutLegs = animals.filter((item) => item === 'snail' || item === 'snake');

// const upperCaseAnimals = animals.map((item) => item.toUpperCase());

// const animalWithNoShellUppercase = animals.filter(item => item !== 'snail').map(item => item.toUpperCase());
// const animalsWithLegs = [];
// const animalWithoutLegs = [];

// for (let counter = 0; counter < animals.length; counter++) {
//   const animal = animals[counter];
//   if (animal !== 'snake' && animal !== 'snail') {
//     animalsWithLegs.push(animal);
//   } else {
//     animalWithoutLegs.push(animal);
//   }
// }

// console.log(animalWithLegs);
// console.log(animalWithoutLegs);
// console.log(upperCaseAnimals);
// console.log(animalWithNoShellUppercase);










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

const sortedPeople = people.sort(compare)
const peopleNames = sortedPeople.map(item => item.name)

console.log(peopleNames)

// we created a new variable called peopleNames and we used people.sort to sort them by age using the function above. After we have sorted them by age, we 
// are using map (which goes through each item in the array)

// const numbers = ["5", "325", "67", "100000", "150"];

// numbers.sort();

// console.log(numbers)
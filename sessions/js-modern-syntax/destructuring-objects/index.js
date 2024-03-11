console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable/function as in the example below to make the tests work.

const company = {
  name: "Spiced Academy",
  course: "Web Development",
  location: "Berlin",
};

// example: export const {value1} = myObject;

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

const user = { name: "John", years: 30 };

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

// EXERCISE 5
// Rewrite the following function (logInfo) to use destructuring assignment for the three variables it creates:

const logInfo = (city) => {
  const name = city.name;
  const country = city.country;
  const numPeople = city.population;

  return `${name} is in ${country} and has ${numPeople} inhabitants in it.`
}

const destructuringLogInfo = (city) => {
  // (Hint: Lines 48-50 should be replaced with a single line and you shouldn't change anything else).
  // your code here


  // your code here
  return `${name} is in ${country} and has ${numPeople} inhabitants in it.`
}

// This is how you would call it:
 destructuringLogInfo({ name: "Marseille", country: "France", population: 861635 });
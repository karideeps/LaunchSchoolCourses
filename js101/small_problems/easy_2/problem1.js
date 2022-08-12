/*

Problem: 
  Input:
    Array of strings
    Object
  Output:
    String

Algorithm:
  join arrayofstrings into a word with spaces
  use string interpolation to reutn name and title

*/

function greetings(arrayOfName, descriptionObject) {
  return `Hello, ${arrayOfName.join(' ')}! Nice to have a ${descriptionObject.title} ${descriptionObject.occupation} around.`
}


// Test case:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
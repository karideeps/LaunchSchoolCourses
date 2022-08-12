// Question 2

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1[str1.length - 1] === '!');
console.log(str2[str2.length - 1] === '!');

// Question 3

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot'));
console.log(ages.hasOwnProperty('Spot'));

//Question 4
/*

Initialize `resultString` to '';
Split `munsterDescription` into separate words and store it in `words`
Iterate through words
  if index == 0 
    capitalize first word and add it to `resultString`
  else
    lowercase the word and add it to `resultString`

*/
let munstersDescription = "the Munsters are CREEPY and Spooky.";

let resultArray = [];
words = munstersDescription.split(' ');
for (let i = 0; i < words.length; i += 1) {
  if (i === 0) {
    resultArray.push(`${words[i][0].toUpperCase()}${words[i].slice(1)}`);
  } else {
    resultArray.push(words[i].toLowerCase());
  }
}

console.log(resultArray.join(' '));

// Question 6
let additionalAges = { Marilyn: 22, Spot: 237 };

/*
for (let person in additionalAges) {
  ages[person] = additionalAges[person];
}
*/

Object.assign(ages, additionalAges);

console.log(ages);

// Question 7

str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

// Question 9
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.split('house')[0]);
console.log(advice.slice(0, advice.indexOf('house')));
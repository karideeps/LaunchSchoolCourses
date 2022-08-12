// Question 1

let advice = "Few things in life are as important as house training your pet dinosaur important.";

// replace first work
console.log(advice.replace('important', 'urgent'));
// replace all words
console.log(advice.replace(/important/g, 'urgent'));


// Question 2

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse());
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(num => num).sort((num1, num2) => num2 - num1));
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
console.log([...numbers].reverse());
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let reversedNumbers = []

numbers.forEach(function(number) {
  reversedNumbers.unshift(number);
})

console.log(reversedNumbers);
console.log(numbers);


// Question 3

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// Question 4

let famousWords = "seven years ago...";
famousWords = "Four score and " + famousWords;
console.log(famousWords);

famousWords = "seven years ago...";
let array = [];
array.unshift("Four score and ", famousWords)
console.log(array.join(''));

// Question 5
array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);

// Question 6
let flintstones = ["Fred", "Wilma"];
additionalNames1 = ["Barney", "Betty"];
additionalNames2 = ["Bambam", "Pebbles"];

console.log(flintstones.concat(additionalNames1, additionalNames2));
console.log([...flintstones, "Barney", "Betty", "Bambam", "Pebbles"]);

flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones.reduce(function (previousValue, currentValue) {
  return previousValue.concat(currentValue);
}, []));

console.log([].concat(...flintstones));

// Question 7

flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones)[2]);

console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift())

// Question 8
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

//Question 9
let title = "Flintstone Family Members";
let anotherTitle = title.padStart(((Math.floor((40 - title.length) / 2)) + title.length), ' ');
console.log(anotherTitle);

console.log(`${' '.repeat(Math.floor((40 - title.length) / 2))}${title}`);

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char == 't').length);
console.log(statement2.split('').filter(char => char == 't'). length);


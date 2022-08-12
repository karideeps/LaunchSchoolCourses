// Question 1
let line = 'The Flintstones Rock!'
for (let i = 0; i < 10; i += 1) {
  console.log(`${' '.repeat(i)}${line}`)
}

// Question 2
let munstersDescription = "The Munsters are creepy and spooky.";

let newString = ''
munstersDescription.split('').forEach(function (character) {
  if (/[a-z ]/.test(character)) {
    newString += character.toUpperCase();
  } else {
    newString += character.toLowerCase();
  }
});

console.log(newString);

// Question 3
function factors(number) {

  if (number === 0) {
    return [0];
  }
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(0));

// Question 4

// This function mutates the passed in argument for the `buffer` parameter
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// This function does NOT mutate the passed in argument for the `buffer` parameter
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Question 5
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// Question 6
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false
console.log(Number.isNaN(NaN))

// Question 7

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); // newAnswer === 50

console.log(answer - 8); // 34
console.log(newAnswer);

// Question 8

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters.Herman.age);
console.log(munsters.Herman.gender);

// Question 9

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// console.log(rps('rock', 'scissors'));

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
console.log('paper');

// Question 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo())); // 'no'
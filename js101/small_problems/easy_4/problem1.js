let teddysAge = Math.ceil(Math.random() * 120);

while (teddysAge < 20) {
  teddysAge = Math.ceil(Math.random() * 12);
}

console.log(`Teddy is ${teddysAge} years old!`);

// It would make a difference if Math.round() was used since it will round it to the higher OR lower number.

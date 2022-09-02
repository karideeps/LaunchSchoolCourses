# 1a
```javascript
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth = function() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width;
  }
}
```

# 1b
```javascript
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },

  getArea() {
    return this.width * this.length;
  }
}

Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
```

# 2
```javascript
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth = function() {
    return this.width;
  }

  getLength() {
    return this.lenght;
  }

  getArea = function() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}


let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
```

# 3
```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name); // logs undefined
console.log(fakeCat.speaks()); // longs undefined says meowww.
```

# 4
```javascript
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, fur) {
    super(name, age)
    this.fur = fur;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info()); // My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotch.info()); // My cat Butterscotch is 10 years old and has tan and white fur.
```

# 4 - Further Exploration
```javascript
class Pet {
  constructor(name, age, fur) {
    this.name = name;
    this.age = age;
    this.fur = fur;
  }
}

class Cat extends Pet {

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info()); // My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotch.info()); // My cat Butterscotch is 10 years old and has tan and white fur.
```

It would not be a good idea to modify the `Pet` class in this way since some pets will not have a fur.

# 5
```javascript
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + ` Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!}`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!"); // logs true

let dog = new Dog("Barki", 4, "sadge", "Bronks");
console.log(dog.introduce());
console.log(dog.greetMaster());
```

# 6
```javascript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return this.wheels
  }

  getInfo() {
    return `${this.make} ${this.model}`
  }
}

class Car extends Vehicle{
  constructor(make, model) {
    super(make, model);
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
    this.wheels = 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
    this.wheels = 6;
  }
}
```

# 7
```javascript
class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // ByeBye
console.log(thing.dupData()); // HelloHello
```

# 8
```javascript
class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting('Hello. It\'s very nice to meet you.'); // Hello. It's very nice to meet you
shouter.greeting('Hello my friend.'); // HELLO MY FRIEND.
```

# 9
```javascript
class Animals {
  constructor(name) {
    this.name = name
  }

  walk() {
    return `${this.name} ${this.gait()} forward`
  }
}

class Person extends Animals {
  gait() {
    return 'strolls';
  }
}

class Cat extends Animals {
  gait() {
    return "saunters";
  }
}

class Cheetah extends Animals {
  gait() {
    return "runs";
  }
}

let mike = new Person("Mike");
console.log(mike.walk()); // Mike strolls forward

let kitty = new Cat("Kitty");
console.log(kitty.walk()); // Kitty saunters forward

let flash = new Cheetah("Flash");
console.log(flash.walk()); // Flash runs
```

# 10a
```javascript
class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.petsAdopted = 0;
  }

  numberOfPets() {
    return this.petsAdopted;
  };
}

class Shelter {

  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    if (!this.adoptions[owner.name]) this.adoptions[owner.name] = [];
    this.adoptions[owner.name].push(pet);
    owner.petsAdopted += 1;
  }

  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`);
      this.adoptions[owner].forEach(pet => {
        console.log(`a ${pet.type} named ${pet.name}`)
      });
      console.log("");
    }
  };
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
```

# 10b
```javascript
function Pet(type, name) {
  this.type = type;
  this.name = name;
}

function Owner(name) {
  this.name = name;
  this.numberOfAdoptions = 0
}

function Shelter() {
  this.adoptions = {};
}

Shelter.prototype.adopt = function(owner, pet) {
  if (!this.adoptions[owner.name]) this.adoptions[owner.name] = [];
  this.adoptions[owner.name].push(pet);
  owner.numberOfAdoptions += 1;
}

Shelter.prototype.printAdoptions = function() {
  for (let owner in this.adoptions) {
    console.log(`${owner} has adopted the following pets:`);
    this.adoptions[owner].forEach(pet => {
      console.log(`${pet.type} named ${pet.name}`)
    });
    console.log("");
  }
}

Owner.prototype.numberOfPets = function() {
  return this.numberOfAdoptions;
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
```

# 10 - Further Exploration
```javascript
let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let asta         = new Pet('dog', 'Asta');
let laddie       = new Pet('dog', 'Laddie');
let fluffy       = new Pet('cat', 'Fluffy');
let kat          = new Pet('cat', 'Kat');
let ben          = new Pet('cat', 'Ben');
let chatterbox   = new Pet('parakeet', 'Chatterbox');
let Bluebell     = new Pet('parakeet', 'Bluebell');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`${shelter.name} has ${shelter.numberOfPets()} unadopted pets.`);

/*
The Animal Shelter has the following unadopted pets:
a dog named Asta
a dog named Laddie
a cat named Fluffy
a cat named Kat
a cat named Ben
a parakeet named Chatterbox
a parakeet named Bluebell

P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
The Animal shelter has 7 unadopted pets.
*/
```

# 11
```javascript
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

// Test cases:
let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

let banner2 = new Banner('');
banner2.displayBanner();

/*
+--+
|  |
|  |
|  |
+--+
*/
```

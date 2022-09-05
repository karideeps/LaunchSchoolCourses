# 1
```javascript
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck = new Truck(2003);
console.log(truck.year);

let car = new Car(2015);
console.log(car.year);
```

# 2
```javascript
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {

  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!');
  }
}

let truck = new Truck(2003); // Ready to go!
console.log(truck.year); // 2003
```

# 3
```javascript
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year)
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year); // 2003
console.log(truck1.bedType); // Short
```

# 4
```javascript
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return  super.startEngine() + ` Drive ${speed}, please!`
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));
```

# 5
```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

const walkMixin = {
  walk() {
    return 'Let\'s fo for a walk!';
  }
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet()); // Hello! My name is Sophie!
console.log(kitty.walk()); // Let's go for a walk!
```

# 6
```javascript
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

Object.assign(Maltese.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());
```

# 7
```javascript
const towMixin = {
  tow() {
    return `I can tow a trailer!`;
  }
};

class Truck {}

class Car {}

Object.assign(Truck.prototype, towMixin);

let truck = new Truck();
console.log(truck.tow()); // I can tow a trailer!
```

# 8
```javascript
const towMixin = {
  tow() {
    return 'I can tow a trailer!';
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year); // 2002
console.log(truck.tow()); // I can tow a trailer

let car = new Car(2015);
console.log(car.year); // 2015
```
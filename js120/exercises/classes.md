# 1
```javascript
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);
```

# 2
```javascript
class Cat {

}
```

# 3
```javascript
class Cat {

}

let kitty = new Cat();
```

# 4
```javascript
class Cat {
  constructor() {
    console.log('I\'m a cat!');
  }
}

let kitty = new Cat();
```

# 5
```javascript
class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie')
```

# 6
```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie')
kitty.greet();
```

# 7
```javascript
class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name);
console.log(person2.name);
```

# 8
```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(name) {
    this.name = name
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
```

# 9
```javascript
class Cat {
  static genericGreeting() {
    console.log('Hello! I\'m a cat!')
  }
}

Cat.genericGreeting();
```

# 10
```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting = function() {
    console.log('Hello I\'m a cat!');
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new Cat('Sohpie');
Cat.genericGreeting();
kitty.personalGreeting();
```
# 1
```javascript
/*
define `ancestors()` method on `foo`
  declare `result` and initialize it to `[]
  declare `prototype` and initialize it to the prototype of `this`
  while (prototype) {
    if (Object.getPrototypeOf(this) === Object.prototype) {
      result.push('Object.prototype');
    } else {
      result.push(Object.getPrototypeOf(this).name);
    }
    reassign prototype = prototype of prototype
  }
*/
// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function() {
  let result = [];
  let prototype = Object.getPrototypeOf(this);
  while (prototype) {
    if (prototype === Object.prototype) {
      result.push('Object.prototype');
    } else {
      result.push(prototype.name);
    }
    prototype = Object.getPrototypeOf(prototype);
  }
  return result;
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
```

# 2a
```javascript
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  communicate() {
    console.log('Communicating');
  }

  eat() {
    console.log('Eating');
  }

  sleep() {
    console.log('Sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log('Diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log('Teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log('Studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, graduateDegree) {
    super(firstName, lastName, age, gender);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log('Researching');
  }
}
```

# 2b
```javascript
function Person (firstName, lastName, age, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.firstName}`;
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('Studying');
}

function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Person.call(this, firstName, lastName, age, gender);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}
```

# 3a
```javascript
class CircularQueue {
  constructor(size) {
    this.buffer = Array(size).fill(null);
    this.size = size;
    this.currentPosition = 0
    this.oldest = 0;
  }

  enqueue(obj) {
    if (this.buffer[this.currentPosition] === null) {
      this.updateCurrentPosition(obj)
    } else {
      this.updateCurrentPosition(obj)
      this.updateOldest();
    }
  }

  updateCurrentPosition(obj) {
    this.buffer[this.currentPosition] = obj;
    this.currentPosition += 1;
    if (this.currentPosition === this.size) this.currentPosition = 0;
  }

  updateOldest() {
    this.oldest += 1;
    if (this.oldest === this.size) this.oldest = 0;
  }

  dequeue() {
    if(this.buffer[this.oldest] === null) return null;

    let returnObj = this.buffer[this.oldest];
    this.buffer[this.oldest] = null;
    this.updateOldest();
    return returnObj;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
```

# 3b
```javascript
class CircularQueue {
  constructor(size) {
    this.array = new Array(size).fill(null);
    this.currentIndex = 0;
    this.oldestIndex = undefined;
  }

  enqueue(element) {
    if (this.oldestIndex === undefined) this.oldestIndex = this.currentIndex;

    if (this.array[this.currentIndex] !== null) {
      this.update('oldestIndex');
    }

    this.array[this.currentIndex] = element;
    this.update('currentIndex');
  }

  dequeue(element) {
    if (this.oldestIndex === undefined) return null;

    let oldestElement = this.array[this.oldestIndex];
    this.array[this.oldestIndex] = null;

    this.update('oldestIndex');

    if (this.array[this.oldestIndex] === null) this.oldestIndex = undefined;

    return oldestElement;
  }

  update(index) {
    this[index] += 1;
    if (this[index] === this.array.length) {
      this[index] = 0;
    }
  }
}
```

# 3 - Further Exploration
```javascript
class CircularQueue {
  constructor(size) {
    this.buffer = [];
    this.size = size
  }

  enqueue(obj) {
    this.buffer.push(obj);
    if (this.buffer.length > this.size) this.buffer = this.buffer.slice(1);
  }

  dequeue() {
    if (this.buffer.length === 0) return null;
    return this.buffer.shift();
  }
}
```
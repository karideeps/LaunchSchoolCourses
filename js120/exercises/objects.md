# 1
```javascript
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); //Good Morning Victor
```

This code throws a `ReferenceError`.

On lines 11, 14, and 17, `morning`, `afternoon`, `evening` , and `name` are not referencing a property on the newly created object, they are instead referencing a variable that has not been defined. 

`greet()` is a method on the newly created object. To reference the object on which `greet()` is defined, the `this` keyword can be used within the body of the method. This way, properties defined on the object can be accessed inside the method, for example: `this.morning`, `this.afternoon`, `this.evening`. The context of `this` inside the body of the method will be implicitly set to the calling object (i.e., `this` will reference the calling object) if the method is invoked using method call syntax ex: `callingObject.method()`.

# 2
```javascript
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};

console.log(item.discount(20))// should return 40

console.log(item.discount(50))// should return 25

console.log(item.discount(25))// should return 37.5
```

# 3
``` javascript
/*
Input: two objects
output: boolean

Algorithm:
define `objectsEqual()` with the arguments `obj1` `obj2`
  loop through each `prop` of `obj1`
    if `obj2` doesn't have prop return false
    if `obj1[prop] !=== `obj2[prop]` return false
  
  return true;
*/

function objectsEqual(obj1, obj2) {
  return compareObjects(obj1, obj2) && compareObjects(obj2, obj1);
}

function compareObjects(obj1, obj2) {
  for (let prop in obj1) {
    if(!obj2.hasOwnProperty(prop)) return false;
    if(obj1[prop] !== obj2[prop]) return false;
  }

  return true;
}

// Test cases:
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo'}, {a: 'foo', b: 'bar'}));            // false
```

# 4
```javascript
function createStudent(name, year) {
  return {
    name,
    year: year,
    courses: {},
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses[course.code] = {
        name: course.name,
      }
    },

    listCourses: function() {
      let resultArray = [];
      for (let prop in this.courses) {
        let obj = {};
        obj.name = this.courses[prop].name;
        obj.code = Number(prop);
        resultArray.push(obj);
      }
      console.log(resultArray);
    },

    addNote(code, note) {
      if (!this.courses[code].note) {
        this.courses[code].note = note;
      } else {
        this.courses[code].note += `; ${note}`;
      }
    },

    updateNote(code, note) {
      this.courses[code].note = note;
    },

    viewNotes() {
      for (let prop in this.courses) {
        if (!this.courses[prop].note) continue;
        console.log(`${this.courses[prop].name}: ${this.courses[prop].note}`)
      }
    }
  }
}

// Test cases:

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
```

# 5
```javascript
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

// Test cases:


school = {
  students: [],

  addStudent(student) {
    const YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
    if (YEARS.includes(student.year)) {
      this.students.push(student);
    } else {
      return 'Invalid Year';
    }
  },

  enrollStudent(name, course) {
    let student = this.students.filter(student => student.name === name)[0];
    if (student) {
      student.addCourse(course);
    }
  },

  addGrade(name, courseCode, grade) {
    let student = this.students.filter(student => student.name === name)[0];
    if (student) {
      let course = student.courses.filter(course => course.code === courseCode)[0];
      course.grade = grade;
    }
  },

  getReportCard(name) {
    let student = this.students.filter(student => student.name === name)[0];
    if (student) {
      student.courses.forEach(course => {
        let grade = course.grade || 'In progress'
        console.log(`${course.name}: ${grade}`);
      })
    }
  },

  courseReport(courseName) {
    let gradeTotal = 0;
    let studentsEnrolled = 0
    let print = [];

    this.students.forEach(student => {
      student.courses.forEach(course => {
        
        if (course.name === courseName) {
          print.push(`${student.name}: ${course.grade}`);
          gradeTotal += course.grade;
          studentsEnrolled += 1;
        }
      })
    });
    if (studentsEnrolled === 1) return undefined;

    console.log(`=${courseName} Grades=`);
    print.forEach(student => console.log(student));
    console.log('---');
    console.log(`Course Average: ${gradeTotal / studentsEnrolled}`);
  }
}

const COURSES = {
  math:         { name: 'Math', code: 101, },
  advancedMath: { name: 'Advanced Math', code: 102, },
  physics:      { name: 'Physics', code: 202, }
}

let foo = createStudent('foo', '3rd');
school.addStudent(foo);
school.enrollStudent('foo', Object.assign({}, COURSES.math));
school.enrollStudent('foo', Object.assign({}, COURSES.advancedMath));
school.enrollStudent('foo', Object.assign({}, COURSES.physics));
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

let bar = createStudent('bar', '2nd');
school.addStudent(bar);
school.enrollStudent('bar', Object.assign({}, COURSES.math));
school.addGrade('bar', 101, 91);

let qux = createStudent('qux', '2nd');
school.addStudent(qux);
school.enrollStudent('qux', Object.assign({}, COURSES.math));
school.enrollStudent('qux', Object.assign({}, COURSES.advancedMath));
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.getReportCard('foo'); // must be PHysics: In progress
console.log('-------------');

school.courseReport('Math');
console.log('-------------');
school.courseReport('Advanced Math');
console.log('-------------');
school.courseReport('Physics');
```
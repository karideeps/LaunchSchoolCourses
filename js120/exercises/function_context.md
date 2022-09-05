# 1
This will log `NaN` to the screen. On line 4, the property `fullName` is assigned the value of `this.firstName + this.lastName`. Anywhere outside a function, the keyword `this` is bound to the global object. If the keyword is used inside a function, then its value depends on how the function was invoked.

Since the `firstName` and `lastName` properties are not defined on the global object, they will each return `undefined`. `undefined + undefined` returns `NaN`.

# 2
This code will log `[ 'undefined 1', 'undefined 2', 'undefined 3' ]` to the screen.

On line 4, an anonymous function expression is passed as an argument to the `Array.prototype.map()` method. The body of this function expression uses the `this` keyword. 

When a function is passed passed as an argument to another function, the function passed as an argument gets stripped off its execution context. The context of the function passed in as an argument will be determined by how it is invoked in the body of the calling function. In this case, it is set to the global object when it is invoked in the `Array.prototype.map()` method. Since the global object doesn't have a `name` property, it returns `undefined`.

The code can be fixed using lexical scoping rules as follows:

```javascript
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());
```

# 3
```javascript
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());
```

# 4
```javascript
function myFilter(array, func, context) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(context, value)) {
      result.push(value);
    }
  })

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]
```
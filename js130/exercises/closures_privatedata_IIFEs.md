# 1
```javascript
let myBind = function(func, context) {
  return function() {
    let args = Object.values(arguments);
    return func.call(context, ...args);
  }
}
```

```javascript
let myBind = function(func, context) {
  return function() {
    let args = Object.values(arguments);
    return func.apply(context, args);
  }
}
```

```javascript
let myBind = function(func, context) {
  return (...args) => {
    func.call(context, ...args);
  }
}
```

```javascript
let myBind = function(func, context) {
  return (...args) => {
    func.call(context, args);
  }
}
```

# 2a
```javascript
let myBind = function(func, context, ...args) {
  return function() {
    let providedArguments = Object.values(arguments);
    return func.call(context, ...args, ...providedArguments);
  }
}
```

# 2b
```javascript
let myBind = function(func, context, ...args) {
  return function() {
    let providedArguments = Object.values(arguments);
    return func.apply(context, [...args, ...providedArguments]);
  }
}
```

# 2c
```javascript
let myBind = function(func, context, ...args) {
  return (...providedArgs) => {
    return func.call(context, ...args, ...providedArgs);
  }
}
```

# 2 - Test Code
```javascript
let someFunc = function(item1, item2, item3, item4, item5) {
  console.log(this.a, this.b);
  console.log(item1, item2, item3, item4, item5);
}

let obj = {
  a: 'hello',
  b: 'world',
}

let boundFunc = myBind3(someFunc, obj, 1, 2, 3);
boundFunc(4, 5);
```

# 3
```javascript
let newStack = function() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },

    pop(item) {
      return stack.pop();
    },

    printStack() {
      stack.forEach(item => console.log(item));
    },
  }
}
```

# 4
```javascript
let delegate = function(obj, methodName, ...args) {
  return function() {
    obj[methodName](...args);
  }
}
```
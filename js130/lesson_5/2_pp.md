# 1
```javascript
function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    printer(i, i* 1000);
  };
}

function printer(number, seconds) {
  setTimeout(function() {
    console.log(number);
  }, seconds);
}

delayLog();
```

# 2
If `let` is replaced by `var`, then the following would be output to the screen:
```javascript
11 // 1 seconds after code starts
11 // 2 seconds after code starts
11 // 3 seconds after code starts
11 // 4 seconds after code starts
11 // 5 seconds after code starts
11 // 6 seconds after code starts
11 // 7 seconds after code starts
11 // 8 seconds after code starts
11 // 9 seconds after code starts
11 // 10 seconds after code starts
```

# 3
```javascript
setTimeout(function() {   //1
  console.log('Once');    //5
}, 1000);

setTimeout(function() {   //2
  console.log('upon');    //7
}, 3000);

setTimeout(function() {   //3
  console.log('a');       //6
}, 2000);

setTimeout(function() {   //4
  console.log('time');    //8
}, 4000);
```

# 4
```javascript
g();
f();
d();
z();
n();
s();
q();
```

# 5
```javascript
function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000)
}
```
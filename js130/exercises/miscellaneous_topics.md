# 1
```javascript
function sum(...args) {

  return args.reduce(function(a, b) {
    return a + b;
  });
}
```

# 2
```javascript
function formatName(firstName, middleName, lastName) {
  return `${lastName} ${firstName}, ${middleName[0]}`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
```
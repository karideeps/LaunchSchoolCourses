# 1
```javascript
function startCounting() {
  let number = 1;
  setInterval(function() {
    console.log(number);
    number += 1;
  });
}
```

# 2
```javascript
function startCounting() {
  let number = 1;
  let id = setInterval(function() {
    console.log(number);
    number += 1;
  }, 1000);

  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
stopCounting(id);
```
let a = ['my', 'name', 'is', 'test', '123']


a.forEach(function (element) {
  console.log(element);
  return true;
})

let b = a.filter((element) => element + 'b')

console.log(b);


let iterate = 0;

a.forEach(function (element) {
  iterate += 1;
})

console.log(iterate);
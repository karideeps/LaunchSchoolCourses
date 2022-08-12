function addName(arr, name) {
  arr = arr.concat([name]);
  console.log(arr);
}

let names = ["bob", "kim"];
addName(names, "jim");
console.log(names);
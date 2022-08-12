function range(start, end = -1) {

  if (end === - 1) {
    end = start;
    start = 0;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(5));


/*
function range(start, end) {
  if (!end) {
    start = 0;
    end = start;
  }

  // ...
}
*/

// 1. !0 is true, so if you set range to 0,
// 2. both start and end are 0
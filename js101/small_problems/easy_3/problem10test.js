
/*
function century(year) {
  let centuryStr = String(Math.ceil(year / 100));

  if (['11', '12', '13'].includes(centuryStr)) {
    return centuryStr + 'th';
  }

  switch (centuryStr[centuryStr.length - 1]) {
    case '1':
      return centuryStr + 'st';
    case '2':
      return centuryStr + 'nd';
    case '3':
      return centuryStr + 'rd';
    default:
      return centuryStr + 'th';
  }
}
*/

function century(year) {
  let centuryStr = String(Math.ceil(year / 100));

  let hundredth = centuryStr.slice(centuryStr.length - 2);

  if (['11', '12', '13'].includes(hundredth)) {
    return centuryStr + 'th';
  }

  switch (centuryStr[centuryStr.length - 1]) {
    case '1':
      return centuryStr + 'st';
    case '2':
      return centuryStr + 'nd';
    case '3':
      return centuryStr + 'rd';
    default:
      return centuryStr + 'th';
  }
}

console.log(century(11001003));
console.log(century(11001103));
console.log(century(11001203));
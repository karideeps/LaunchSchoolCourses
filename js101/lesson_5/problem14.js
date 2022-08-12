


/*

Problem:
  Input: object
  OUtput: array of arrays

Algorithm:
  declare `resultsArray` and assign it an empty array
  loop through `produce` in `obj`
    if `obj[produce].type === 'fruit'
      push colors to resultsArray
    else
      push size to resultsArray


*/


let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let resultsArray = [];
for (let produce in obj) {
  if (obj[produce].type === 'fruit') {

    let capitalizedArray = obj[produce].colors.map(function (color) {
      return color[0].toUpperCase() + color.slice(1);
    });

    resultsArray.push(capitalizedArray);

  } else {
    resultsArray.push(obj[produce].size.toUpperCase());
  }
}


console.log(resultsArray);
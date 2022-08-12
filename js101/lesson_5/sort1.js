let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];


// return [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

console.log(scores.sort((a, b) => a.reduce((acc, currentValue) => acc + currentValue) - b.reduce((acc,currentValue) => acc + currentValue)
))
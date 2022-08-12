let a = ['first', 'second', ['nestedone', 'nestedtwo']];

let b = a[2];
b[0] = 'changed'

console.log(b[0]);
console.log(a)

a = ['first', 'second', ['nestedone', ['nestednest']]];
b = a[2].concat();

console.log(b);
b[0] = 'willitchange'
console.log(b);
console.log(a);

b[1][0] = 'this should change';
console.log(b)
console.log(a);
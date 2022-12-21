/*
declare class `Diamond`

  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  static makeDiamond()
    input: string; `letter`
    output: `string`

    declare `resultArray` and initialize it to `[]`
    let letterIndex = Diamond.LETTERS.findIndex(letter)
    resultArray.push(letterAndInnerSpace(letterIndex))

    from 1 to letter index; i // spaces around letter
      indexOfNextLetter = letterIndex - i
      letterLine = `${' '.repeat(i)}${letterAndInnerSpace(indexOfNextLetter)}${' '.repeat(i)}`
      push and unshift `letterLine` to `resultArray`

  static letterAndInnerSpace(index)
    let letter = Diamond.LETTERS[index]
    if index === 0 return letter
    return `${letter}${' '.repeat(2 x index - 1)${letter}}





*/

/* `a`
0 spaces; A; 0 space; \n
*/

/* `b`
1 space; A; 1 space; \n

0 space; B; 1 space; B; 0 space; \n

1 space; A; 1 space; \n
*/

/*`c`
2 spaces; A; 2 spaces; \n

1 space; B; 1 space; B; 1 space; \n
0 space; C; 3 space; C; 0 space; \n
1 space; B; 1 space; B; 1 space; \n

2 spaces; A; 2 spaces; \n
*/

/* `e`
4 space; A; 4 space; \n

3 space; B; 1 space; B; 3 space; \n
2 space; C; 3 space; C; 2 space; \n
1 space; D; 5 space; D; 1 space; \n
0 space; E; 7 space; E; 1 space; \n
1 space; D; 5 space; D; 1 space; \n
2 space; C; 3 space; C; 2 space; \n
3 space; B; 1 space; B; 3 space; \n

4 space; A; 4 space; \n
*/

/* spaces between letters
A line will only have 1 letter
B line will always have 1 space between the letters
C line will always have 3 spaces between the letters
D line will always have 5 spaces between the letters
E line will always have 7 spaces between the letters
...
Z line will alwys have ...? spaces between the letters

0; 0; 2x - 1 // don't include; A is different from the rest

1; 1; 2x - 1 // B
2; 3; 2x - 1 // C
3; 5; 2x - 1 // D
4; 7; 2x - 1 // E
5; 9; 2x - 1 // F
6; 11; 2x - 1 // G
..
25; 47; 2x - 1 // Z

letterIndex x 2 - 3
*/

/*spaces before and after letters

if letter index 0 (A)
0

if letter index 1 (B)
1
0
1

if letter index 2 (C)
2
1
0
1
2

if letter index 3 (D)
3
2
1
0
1
2
3

if letter index 4 (E)

4
3
2
1
0
1
2
3
4

...

*/
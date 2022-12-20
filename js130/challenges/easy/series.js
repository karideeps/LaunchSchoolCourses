/*
declare class `Series`
  constructor()
    takes a `string` argument
    this.number = `string`

  slices()
    input: takes a number argument argument `slice`
    ouput: array

    declare `slices` and initialize it to `[]`
    loop from 0 (inclusive) to `this.number.length` (exclusive): `i`
    if (i + slice > this.number.length) break;
      declare `currentSlice` and initialize it to `[]`
      declare `currentIndex` and initialize it to `i`
      loop from 1(inclusive) to slice(inclusive): `j`
        push `this.number[currentIndex]` to `currentSlice`
        increment `currentIndex` by 1
      push `currentSlice` to `slices`
    return `slices`
*/

class Series {
  constructor(string) {
    this.number = string;
  }

  slices(sliceLength) {
    if (sliceLength > this.number.length) throw new Error();

    let slices = [];
    for (let i = 0; i < this.number.length; i += 1) {
      if (i + sliceLength > this.number.length) break;
      let currentSlice = [];
      let currentIndex = i
      for (let j = 1; j <= sliceLength; j += 1) {
        currentSlice.push(Number(this.number[currentIndex]));
        currentIndex += 1;
      }
      slices.push(currentSlice);
    }
    return slices;
  }
}

module.exports = Series;
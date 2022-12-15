/*
declare DNA Class which takes a sequence
  this.sequence = sequence

  hammingDistance(compareSequence)
    declare `hammingDistance` and initialize it to `0`
    declare `counter` and initialize it to `0`
      while counter < this.sequence.length && counter < compareSequence.length
        if (this.sequence[counter] === compareSequence[counter]) {
          hammingDistance += 1
        }
        counter += 1
      return hammingDistance;

*/


class DNA {
  constructor (sequence) {
    this.sequence = sequence;
  }

  hammingDistance(compareSequence) {
    let hammingDistance = 0;
    let counter = 0
    while (counter < this.sequence.length && counter < compareSequence.length) {
      if (this.sequence[counter] !== compareSequence[counter]) {
        hammingDistance += 1;
      }
      counter += 1;
    }
    return hammingDistance;
  }
}

module.exports = DNA;
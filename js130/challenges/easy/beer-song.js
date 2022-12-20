/*
declare class `BeerSong`

  verse() takes two arguments `startingVerse` and `endingVerse`

    let resultString = ''

    if no `endingVerse`
      endingVerse = startingVerse

    from `startingVerse` (inclusive) to `endingVerse`(inclusive); DECREMENT `currentVerse`
      resultString += firstLine(currentVerse);
      resultString += secondLine(currentVerse);

    return resultString;

  firstLine(currentVerse)
    return `${numberOfBottles(currentVerse)} of beer on the wall, ${numberOfBottles(currentVerse)} of beer.

  secondLine(currentVerse)
    if (currentVerse === 0)
      return Go to the store and buy some " +
                   "more, 99 bottles of beer on the wall.
    else
      return Take one down and pass it around, ${numberOfBottles(currentVerse) - 1} " +
                   "on the wall.


  numberOfBottles(currentBottleNumber) {
    if currentBottleNumber === 0
      return `No more bottles`
    if currentBottleNumber === 1
      return `1 bottle`
    return `${currentBottleNumber} bottles`
  }

  lyrics() 
    return verse(99, 0)

*/

class BeerSong {
  static verse(verse) {
    let resultString = '';
    resultString += BeerSong.firstLine(verse);
    resultString += BeerSong.secondLine(verse);
    return resultString;
  }

  static verses(startingVerse, endingVerse) {
    let resultString = '';
    for (let currentVerse = startingVerse; currentVerse >= endingVerse; currentVerse -= 1) {
      resultString += BeerSong.verse(currentVerse);
      if (currentVerse !== endingVerse) resultString += `\n`;
    }
    return resultString;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static firstLine(currentVerse) {
    let numberOfBottles = BeerSong.bottleOrBottles(currentVerse);
    return `${numberOfBottles} of beer on the wall, ${numberOfBottles.toLowerCase()} of beer.\n`
  }

  static secondLine(currentVerse) {
    if (currentVerse === 0) {
      return "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    } else if (currentVerse === 1) {
      return "Take it down and pass it around, no more bottles of beer on the wall.\n"
    } else {
      let numberOfBottles = BeerSong.bottleOrBottles(currentVerse - 1);
      return `Take one down and pass it around, ${numberOfBottles} of beer on the wall.\n`;
    }
  }

  static bottleOrBottles(numberOfBottles) {

    switch (numberOfBottles) {
      case 0:
        return 'No more bottles';
      case 1:
        return '1 bottle';
      default:
        return `${numberOfBottles} bottles`;
    }
  }
}

module.exports = BeerSong;
/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `longestSentence()` that takes `paragraph` as an input


    split paragraph into sentences
      `.` `!` and `?` marks the end of a sentence

    declare `arrayOfSentences`
    declare `sentence` and assign it an empty string
    iterate through every character in paragraph
      add characters to `sentence`
      if character is `.` `!` or `?`
        add character to sentence
        push sentence to `arrayOfSentences`
        sentence = ''


    transform array of sentences into number of words
      split each sentence into an `arrayOfWords`
        count the length of `arrayOfWords`

    find the index of the longest sentence
      a.indexOf(Math.max(...a));

    return resuts via string concatination
*/

function longestSentence(paragraph) {
  let arrayOfSentences = []
  let sentence = ''

  paragraph.split('').forEach(function (character) {
    sentence += character;
    if (['?', '!', '.'].includes(character)) {
      arrayOfSentences.push(sentence.trim());
      sentence = '';
    }
  })

  arrayOfLengths = arrayOfSentences.map(function (sentence) {
    return sentence.split(' ').length;
  })

  let indexOfLongest = arrayOfLengths.indexOf(Math.max(...arrayOfLengths));

  console.log(arrayOfSentences[indexOfLongest]);

  console.log(`The longest sentence has ${arrayOfLengths[indexOfLongest]} words.`)

}


longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
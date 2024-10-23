function longestSentence(text) {
  // sentences begin with a word character and end in any of `.!?`
  let sentences = text.match(/\b[^.!?]+[.!?]/g);
  if (!sentences) {
    console.log('No valid sentences found.');
    return -1;
  }

  sentences.sort((a, b) => getWordCount(b) - getWordCount(a));
  console.log(sentences[0] + '\n');
  console.log(`The longest sentence has ${getWordCount(sentences[0])} words.`);
}

function getWordCount(sentence) {
  let words = sentence.split(/[ ]+/);
  // accounts for space between last word and ending punctuation
  if ('.?!'.includes(words[words.length - 1])) words.pop();
  return words.length;
}

// let longText = 'Four score and seven years ago our fathers brought forth' +
//   ' on this continent a new nation, conceived in liberty, and' +
//   ' dedicated to the proposition that all men are created' +
//   ' equal.' +
//   ' Now we are engaged in a great civil war, testing whether' +
//   ' that nation, or any nation so conceived and so dedicated,' +
//   ' can long endure. We are met on a great battlefield of that' +
//   ' war. We have come to dedicate a portion of that field, as' +
//   ' a final resting place for those who here gave their lives' +
//   ' that that nation might live. It is altogether fitting and' +
//   ' proper that we should do this.' +
//   ' But, in a larger sense, we can not dedicate, we can not' +
//   ' consecrate, we can not hallow this ground. The brave' +
//   ' men, living and dead, who struggled here, have' +
//   ' consecrated it, far above our poor power to add or' +
//   ' detract. The world will little note, nor long remember' +
//   ' what we say here, but it can never forget what they' +
//   ' did here. It is for us the living, rather, to be dedicated' +
//   ' here to the unfinished work which they who fought' +
//   ' here have thus far so nobly advanced. It is rather for' +
//   ' us to be here dedicated to the great task remaining' +
//   ' before us -- that from these honored dead we take' +
//   ' increased devotion to that cause for which they gave' +
//   ' the last full measure of devotion -- that we here highly' +
//   ' resolve that these dead shall not have died in vain' +
//   ' -- that this nation, under God, shall have a new birth' +
//   ' of freedom -- and that government of the people, by' +
//   ' the people, for the people, shall not perish from the' +
//   ' earth.';


// longestSentence(longText);

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.

// longestSentence("Hello there %#$^ (hello)! What? Hello, there.");

// longestSentence("     I yam what I yam!");

// longestSentence("To be or not to be? The brown fox is superlative!");
// To be or not to be?

// The longest sentence has 6 words.

// longestSentence(" .");
// longestSentence("?");

// longestSentence("Hello ! Why  not? Goodbye.");
// Hello there! *or* Why  not?

// The longest sentence has 2 words.

// longestSentence("I!");
// I!

// The longest sentence has 1 word(s).

// longestSentence("The brown fox is superlative! To be or not to be?");
// To be or not to be?

// The longest sentence has 6 words.

// longestSentence("Why  not? Goodbye!");
// Why  not?

// The longest sentence has 2 words.

// longestSentence("Hello there! Why  not? Goodbye.");
// Hello there! *OR*  Why  not?

// The longest sentence has 2 words.

// longestSentence("Hello   ! Why not? Goodbye.");
// Why not?

// The longest sentence has 2 words.

// longestSentence("No punctuation");
// No valid sentences found.

// longestSentence("Hello ,,, there! What? Hello, there.");
// Hello ,,, there!

// The longest sentence has 3 words.

// longestSentence("    I yam what I yam! Hi there!");
// I yam what I yam!

// The longest sentence has 5 words.

// longestSentence("Hello there! Why  not? Goodbye.");
// Hello there! (or Why  not?)

// The longest sentence has 2 words.

// longestSentence("    I yam what I yam!");
// Here's the output. Note the leading spaces:
    // I yam what I yam!
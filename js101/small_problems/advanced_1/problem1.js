/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `madlibs()` that takes `sentence` as an input
    split `sentence` into an array of `words`
    transform each word in `words` array
      use `transformWord()`
    join `words` into a string
    return string

  define function `transformWord(word)`
      if word === 'noun' || word.slice(0, word.length - 1) === 'noun'
        replace it with a random word from 'nouns'
      if word === 'adjective'
        replace it with a random word from 'adjective'
      if word === 'verb'
        replace it with a random word from 'verb'
      if word === 'adverb'
        replace it with a random word from 'adverb'
      else
        return word
*/

const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];

function transformWord(word) {
  let newWord = word;
  if (word === 'noun') {
    newWord = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  } else if (word === 'verb') {
    newWord = VERBS[Math.floor(Math.random() * VERBS.length)];
  } else if (word === 'adverb') {
    newWord = ADVERBS[Math.floor(Math.random() * ADVERBS.length)];
  } else if (word === 'adjective') {
    newWord = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  } else if (word.slice(0, word.length - 1) === 'noun') {
    newWord = NOUNS[Math.floor(Math.random() * NOUNS.length)] + word[word.length - 1];
  } else if(word.slice(0, word.length - 1) === 'verb') {
    newWord = VERBS[Math.floor(Math.random() * VERBS.length)] + word[word.length - 1];
  } else if (word.slice(0, word.length - 1) === 'adverb') {
    newWord = ADVERBS[Math.floor(Math.random() * ADVERBS.length)] + word[word.length - 1];
  } else if (word.slice(0, word.length - 1) === 'adjective') {
    newWord = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)] + word[word.length - 1];
  }

  return newWord;
}

function madlibs(sentence) {
  console.log(sentence.split(' ').map(word => transformWord(word)).join(' '));
}

let template1 = "The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around."

madlibs(template1);
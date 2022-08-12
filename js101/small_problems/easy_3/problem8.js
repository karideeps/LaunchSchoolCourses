/*

Problem:
  Input: 3 integers
  Output: String

Algorithm:
  define `getGrades()` that takes `score1` `score2` and `score3` as arguments
    initialize `average` to average of 3 scores
    if average is less than 60
      return F
    if average is less than 70
      return D
    ...

    if average is <= 100
      return A

*/

function getGrade(score1, score2, score3) {
  average = (score1 + score2 + score3) / 3;

  if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else {
    return 'A';
  }
}



// Test cases:
console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");
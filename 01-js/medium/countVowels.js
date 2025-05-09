/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
const vowels = ['a','e','i','o','u','A','E','O','I','U' ];

var vowelsCount = 0;

for (let i = 0; i < str.length; i++) {
  // if (vowels.indexOf(str[i]) !== -1) {
  //   vowelsCount += 1;
  // }

  if (vowels.includes(str[i])) {
    vowelsCount += 1;
  }
}
  return vowelsCount
}
module.exports = countVowels;
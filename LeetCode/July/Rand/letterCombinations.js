/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/*
 * @param {string} digits
 * @return {string[]}
 */

var numToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  // base case
  // if one number left
  if (digits.length === 1) {
    // return the letters for that number, split
    return numToLetters[digits].split('');
  }

  // recursive case
  // pass digits after current digit to letterCombinations
  let wordArr = letterCombinations(digits.slice(1));

  let result = [];

  // for each letter for the current digit
  numToLetters[digits[0]].split('').forEach((currentDigitLetter) => {
    // for each index in the returned array
    wordArr.forEach((word) => {
      result.push(currentDigitLetter + word);
    });
      // set the value at the index equal to the current letter plus the prev value
  });

  return result;
};

/////////////////////// TESTS /////////////////////
var result = JSON.stringify(letterCombinations('23'));
var expected = JSON.stringify(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);

console.log(result === expected);

result = JSON.stringify(letterCombinations('84'));
expected = JSON.stringify(["tg","th","ti","ug","uh","ui","vg","vh","vi"]);

console.log(result === expected);

result = JSON.stringify(letterCombinations([]));
expected = JSON.stringify([]);

console.log(result === expected);
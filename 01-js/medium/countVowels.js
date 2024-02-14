/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase();
  let res = 0;
  for(let char of str) {
    //if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')  res++;
    if(vowels.includes(char))  res++;
  }
  return res;
}

module.exports = countVowels;
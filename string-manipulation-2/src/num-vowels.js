/* exported numVowels */

function numVowels(string) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string.charAt(i))) {
      count++;
    }
  }
  return count;
}

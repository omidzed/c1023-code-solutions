/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const suffixAdded = [];
  for (let i = 0; i < words.length; i++) {
    suffixAdded.push(words[i] + suffix);
  }
  return suffixAdded;
}

/* exported getWords */

function getWords(string) {
  const wordArray = string.split(' ');
  if (string === '') {
    return string.split('');
  }
  return wordArray;
}

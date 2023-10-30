/* exported capitalizeWord */

function capitalizeWord(word) {
  const wordBreakdown = word.toLowerCase().split('');
  const joinWord = wordBreakdown.join('');
  let finalWord = '';
  if (joinWord === 'javascript') {
    finalWord =
      joinWord[0].toUpperCase() +
      joinWord.substring(1, 4) +
      joinWord[4].toUpperCase() +
      joinWord.substring(5);
    return finalWord;
  } else {
    const part = wordBreakdown.slice(1).join('');
    return wordBreakdown[0].toUpperCase() + part;
  }
}


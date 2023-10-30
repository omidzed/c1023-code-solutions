/* exported ransomCase */

function ransomCase(string) {
  let ransom = '';

  if (string.length % 2 === 0) {
    for (let i = 0; i < string.length; i += 2) {
      ransom +=
        string.charAt(i).toLowerCase() + string.charAt(i + 1).toUpperCase();
    }
    return ransom;
  } else {
    const finalLetter = string.charAt(string.length - 1).toLowerCase();
    for (let i = 0; i < string.length - 1; i += 2) {
      ransom +=
        string.charAt(i).toLowerCase() + string.charAt(i + 1).toUpperCase();
    }
    return ransom + finalLetter;
  }
}

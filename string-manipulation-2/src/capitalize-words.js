/* exported capitalizeWords */

function capitalizeWords(string) {
  const words = string.split(' ');
  const capitalized = [];
  for (let i = 0; i < words.length; i++) {
    capitalized.push(
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    );
  }
  return capitalized.join(' ');
}

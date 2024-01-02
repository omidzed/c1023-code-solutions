export function countOccurrences(str: string, char: string): number {
  const occurences = str.split('');
  let count = 0;
  occurences.forEach((char) => (count = count + 1));
  return count;
}

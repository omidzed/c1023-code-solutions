export function countOccurrences(str: string, char: string): number {
  const occurencess = str.split('');
  let count = 0;
  occurencess.forEach((char) => (count = count + 1));
  return count;
}

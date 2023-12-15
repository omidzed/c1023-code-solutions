import { writeFile } from 'node:fs/promises';

try {
  const data = Math.random();
  await writeFile(`random.txt`, data + '\n');
  console.log(data);
} catch (err) {
  console.error('Read error message please and retry:', err);
}

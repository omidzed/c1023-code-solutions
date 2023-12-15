import { writeFile } from 'node:fs/promises';

const [, , note] = process.argv;

try {
  await writeFile('note.txt', note + '\n', 'utf8');
} catch (err) {
  console.error('error message', err);
}

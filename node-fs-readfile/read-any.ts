import { readFile } from 'node:fs/promises';
try {
  const filePath = process.argv[2];
  const text = await readFile(filePath, { encoding: 'utf8' });
  console.log(text);
} catch (err) {
  console.error('error reading file', err);
  process.exit(1);
}

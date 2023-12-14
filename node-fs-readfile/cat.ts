import { readFile } from 'node:fs/promises';

const filenames = process.argv.slice(2);

try {
  const promises = filenames.map((path) => readFile(path, 'utf8'));
  const contents = await Promise.all(promises);
  console.log(contents.join('\nNext File:\n'));
} catch (err) {
  console.log(err);
  process.exit(1);
}

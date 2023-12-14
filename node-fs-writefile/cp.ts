import { readFile, writeFile } from 'node:fs/promises';

const [source, destination] = process.argv.slice(2);

if (!source || !destination) {
  console.error('Usage: cp <source> <destination>');
  process.exit(1);
}

try {
  const content = await readFile(source, 'utf8');

  await writeFile(destination, content);

  console.log(`Copied ${source} to ${destination}`);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}

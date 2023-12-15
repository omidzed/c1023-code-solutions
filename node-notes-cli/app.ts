import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};
const [, , note] = process.argv;
console.log('process.argv[2]', process.argv[2]);
async function read(): Promise<Data> {
  const notes = await readFile('data.json', 'utf-8');
  const parsedNotes = JSON.parse(notes);
  return parsedNotes;
}

async function readNotes(): Promise<void> {
  try {
    const readResults = await read();
    for (const property in readResults.notes) {
      console.log(`${property}`, readResults.notes[property]);
    }
  } catch (err) {
    console.error('error message', err);
  }
}

async function create(note): Promise<void> {
  const createResults = await read();
  createResults.notes[createResults.nextId] = 'notes text';
  const note = JSON.stringify(createResults, null, 2);

  try {
    await writeFile('data.json', note, 'utf8');
  } catch (err) {
    console.error('error message', err);
  }
}

async function deleteNote(): Promise<void> {
  try {
    await writeFile('data.json', note, 'utf8');
  } catch (err) {
    console.error('error message', err);
  }
}

readNotes();
create();
deleteNote();

import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , command, arg1, arg2] = process.argv;

try {
  switch (command) {
    case 'read':
      await readNotes();
      break;
    case 'create':
      await createNote(arg1);
      break;
    case 'update':
      await updateNote(arg1, arg2);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;
    default:
      console.log('hey, dummy! bad command');
      process.exit(1);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

async function read(): Promise<Data> {
  const contents = await readFile('data.json', 'utf8');
  return JSON.parse(contents);
}

async function write(data: Data): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

function checkNote(note: string): void {
  if (!note) {
    console.log('No note specified');
    process.exit(1);
  }
}

function checkId(id: string, data: Data): void {
  if (!(id in data.notes)) {
    console.log(`${id} does not exist`);
    process.exit(1);
  }
}

async function readNotes(): Promise<void> {
  const data = await read();
  for (const id in data.notes) {
    console.log(`${id} - ${data.notes[id]}`);
  }
}
async function createNote(note: string): Promise<void> {
  checkNote(note);
  const data = await read();
  data.notes[data.nextId] = note;
  data.nextId++;
  await write(data);
}

async function updateNote(id: string, note: string): Promise<void> {
  checkNote(note);
  const data = await read();
  checkId(id, data);
  data.notes[id] = note;
  await write(data);
}

async function deleteNote(id: string): Promise<void> {
  const data = await read();
  checkId(id, data);
  delete data.notes[id];
  await write(data);
}

// The following was my in class attempt at the assignemnt, I left it here, to compare my thought
// process to the solutions, which I pasted from slack, so I can see the proper ways of doing it in action

// import { readFile, writeFile } from 'node:fs/promises';

// type Data = {
//   nextId: number;
//   notes: Record<string, string>;
// };
// const [, , note] = process.argv;
// console.log('process.argv[2]', process.argv[2]);
// async function read(): Promise<Data> {
//   const notes = await readFile('data.json', 'utf-8');
//   const parsedNotes = JSON.parse(notes);
//   return parsedNotes;
// }

// async function readNotes(): Promise<void> {
//   try {
//     const readResults = await read();
//     for (const property in readResults.notes) {
//       console.log(`${property}`, readResults.notes[property]);
//     }
//   } catch (err) {
//     console.error('error message', err);
//   }
// }

// async function create(note): Promise<void> {
//   const createResults = await read();
//   createResults.notes[createResults.nextId] = 'notes text';
//   const note = JSON.stringify(createResults, null, 2);

//   try {
//     await writeFile('data.json', note, 'utf8');
//   } catch (err) {
//     console.error('error message', err);
//   }
// }

// async function deleteNote(): Promise<void> {
//   try {
//     await writeFile('data.json', note, 'utf8');
//   } catch (err) {
//     console.error('error message', err);
//   }
// }

// readNotes();
// create();
// deleteNote();

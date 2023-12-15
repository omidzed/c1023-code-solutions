import { read } from './read.js';

const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce(): Promise<void> {
  const msg: string = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', msg);
}

async function readSeveral(): Promise<void> {
  const msg1: string = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', msg1);

  const msg2: string = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg2);

  const msg3: string = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', msg3);
}

async function readChained(): Promise<void> {
  const msg1: string = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', msg1);

  const msg2: string = await read(msg1);
  console.log(elapsed(), 'readChained2:', msg2);

  const msg3: string = await read(msg2);
  console.log(elapsed(), 'readChained3:', msg3);
}

async function main(): Promise<void> {
  await readOnce();
  await readSeveral();
  await readChained();
}

main();

// function readOnce(): Promise<void> {
//   return read('foo/bar.html').then((msg) =>
//     console.log(elapsed(), 'readOnce:', msg)
//   );
// }

// function readSeveral(): Promise<void> {
//   return read('foo1/bar.html')
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral1:', msg);
//       return read('foo2/bar.html');
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral2:', msg);
//       return read('foo3/bar.html');
//     })
//     .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
// }

// function readChained(): Promise<void> {
//   return read('foo-chain/bar.html')
//     .then((msg1) => {
//       console.log(elapsed(), 'readChained1:', msg1);
//       return read(msg1);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'readChained2:', msg2);
//       return read(msg2);
//     })
//     .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
// }

// readOnce()
//   .then(() => readSeveral())
//   .then(() => readChained());

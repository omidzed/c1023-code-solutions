import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  try {
    const msg = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.error(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral(): Promise<void> {
  try {
    const msg1 = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', msg1);

    const msg2 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', msg2);

    const msg3 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', msg3);
  } catch (error) {
    console.error(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained(): Promise<void> {
  try {
    const msg1 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg1);

    const msg2 = await read(msg1, false);
    console.log(elapsed(), 'throwChained2:', msg2);

    const msg3 = await read(msg2, false);
    console.log(elapsed(), 'throwChained3:', msg3);
  } catch (error) {
    console.error(elapsed(), 'throwChained Error:', error.message);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
  await throwOnce();
  await throwSeveral();
  await throwChained();
}

main();

// function throwOnce(): Promise<void> {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log the entire error so that
//   // you get the stack trace.
//   return read('foo', false)
//     .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
//     .catch((error) =>
//       console.log(elapsed(), 'throwOnce Error:', error.message)
//     );
// }

// function throwSeveral(): Promise<void> {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log `error` so that
//   // you get the stack trace.
//   return read('foo1', false)
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral1:', msg);
//       return read('foo2', false);
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral2:', msg);
//       return read('foo3', false);
//     })
//     .then((msg) => console.log(elapsed(), 'throwSeveral3:', msg))
//     .catch((error) =>
//       console.log(elapsed(), 'throwSeveral Error:', error.message)
//     );
// }

// function throwChained(): Promise<void> {
//   return read('foo-chain', false)
//     .then((msg1) => {
//       console.log(elapsed(), 'throwChained1:', msg1);
//       return read(msg1, false);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'throwChained2:', msg2);
//       return read(msg2, false);
//     })
//     .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
//     .catch((error) =>
//       console.log(elapsed(), 'throwChained Error:', error.message)
//     );
// }

// throwOnce()
//   .then(() => throwSeveral())
//   .then(() => throwChained());

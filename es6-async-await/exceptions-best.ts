import { read } from './read.js';

const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  const msg = await read('foo', false);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral(): Promise<void> {
  const msg1 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', msg1);

  const msg2 = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', msg2);

  const msg3 = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', msg3);
}

async function throwChained(): Promise<void> {
  const msg1 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msg1);

  const msg2 = await read(msg1, false);
  console.log(elapsed(), 'throwChained2:', msg2);

  const msg3 = await read(msg2, false);
  console.log(elapsed(), 'throwChained3:', msg3);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
  try {
    await throwOnce();
    await throwSeveral();
    await throwChained();
  } catch (error) {
    if (error instanceof Error) {
      console.error(elapsed(), 'Main Error:', error.message);
    } else {
      console.error(elapsed(), 'An unknown error occurred in main');
    }
  }
}

main();

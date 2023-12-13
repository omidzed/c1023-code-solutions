import { takeAChance } from './take-a-chance.js';

takeAChance('Omid')
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));

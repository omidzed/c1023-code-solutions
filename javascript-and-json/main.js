const books = [
  {
    isbn: 9781544507859,
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: 'David Goggins',
  },
  {
    isbn: 9781544534060,
    title: 'Never Finished: Unshackle Your Mind and Win the War Within',
    author: 'David Goggins',
  },
  {
    isbn: 9781250279309,
    title: 'Endure: How to Work Hard, Outlast, and Keep Hammering ',
    author: 'Cameron Hanes',
  },
];

console.log('Books array: ', books);
console.log('Type: ', typeof books);

const booksStringified = JSON.stringify(books);
console.log('booksStringified: ', booksStringified);
console.log('Type: ', typeof booksStringified);

const studentJSON = '{ "Number id": 34398971, "name": "Omid Asadi" }';
console.log('StudentJSON: ', studentJSON);
console.log('Type: ', typeof studentJSON);

const studentJSONparsed = JSON.parse(studentJSON);
console.log('studentJSONparsed: ', studentJSONparsed);
console.log('Type: ', typeof studentJSONparsed);

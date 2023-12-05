const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log(prices.map((index) => ({ price: index, salesPrice: index / 2 })));

prices.map((index) =>
  console.log('forrmatted prices: ', { price: '$' + index.toFixed(2) })
);

/* exported oddOrEven */

function oddOrEven(numbers) {
  const oddOrEven = [];
  numbers.forEach(function (number) {
    if (number % 2 === 0) {
      oddOrEven.push('even');
    } else oddOrEven.push('odd');
  });
  return oddOrEven;
}

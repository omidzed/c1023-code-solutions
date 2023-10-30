/* exported initial */

function initial (array){
  const initialArray = [];
  for (let i = 0; i < (array.length - 1); i++){
    initialArray.push(array[i]);
  }
  return initialArray;
}

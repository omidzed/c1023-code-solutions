const $noButton = document.querySelector('.no');
const $container = document.querySelector('.container');


$noButton.addEventListener('click', handleNoButton);

function handleNoButton(event) {
  $container.classList.add('hidden');
  console.log('no works');
}
console.log($noButton);
console.log('running');

const $noButton = document.querySelector('.no');
const $openModal = document.querySelector('.open-modal');
const $container = document.querySelector('.container');

function handleNoButton(event) {
  $container.classList.add('hidden');
}

function handleOpenModal(event) {
  $container.classList.remove('hidden');
}

$openModal.addEventListener('click', handleOpenModal);
$noButton.addEventListener('click', handleNoButton);

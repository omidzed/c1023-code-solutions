function handleFocus(event) {
  console.log('The focus event fired.');
  console.log('focus target:', event.target.name);
}

function handleBlur(event) {
  console.log('The blur event fired.');
  console.log('blur target:', event.target.name);
}

function handleInput(event) {
  console.log('target name:', event.target.name);
  console.log(' target value:', event.target.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);

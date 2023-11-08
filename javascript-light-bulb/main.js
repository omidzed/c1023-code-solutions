const $bulb = document.querySelector('.bulb');
const $container = document.querySelector('.container');
$bulb.addEventListener('click', handleClick);

function handleClick(event) {
  if ($bulb.className === 'bulb light') {
    $bulb.className = 'bulb dark';
    $container.className = 'container dark';
  } else {
    $bulb.className = 'bulb light';
    $container.className = 'container light';
  }
}

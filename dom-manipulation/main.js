let count = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickButton = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  count++;
  $clickButton.textContent = 'Clicks: ' + count;
  if (count >= 4) {
    $hotButton.setAttribute('class', 'hot-button cool');
  }
  if (count >= 7) {
    $hotButton.setAttribute('class', 'hot-button tepid');
  }
  if (count >= 10) {
    $hotButton.setAttribute('class', 'hot-button warm');
  }
  if (count >= 13) {
    $hotButton.setAttribute('class', 'hot-button hot');
  }
  if (count >= 16) {
    $hotButton.setAttribute('class', 'hot-button nuclear');
  }
});

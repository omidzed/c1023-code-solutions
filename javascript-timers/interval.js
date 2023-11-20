const $heading = document.querySelector('.countdown-display');

function headingChange() {
  if ($heading.textContent === '4') {
    $heading.textContent = '3';
  } else if ($heading.textContent === '3') {
    $heading.textContent = '2';
  } else if ($heading.textContent === '2') {
    $heading.textContent = '1';
  } else if ($heading.textContent === '1') {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(headingChange, 1000);

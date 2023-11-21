const $pikachuCircle = document.querySelector('#pikachu');
const $charmanderCircle = document.querySelector('#charmander');
const $squirtleCircle = document.querySelector('#squirtle');
const $bulbasaurCircle = document.querySelector('#bulbasaur');
const $jigglypuffCircle = document.querySelector('#jigglypuff');
const $leftChevron = document.querySelector('.fa-chevron-left');
const $rightChevron = document.querySelector('.fa-chevron-right');
const $image = document.querySelector('#image');

const images = [
  './images/pikachu.png',
  './images/bulbasaur.png',
  './images/charmander.png',
  './images/squirtle.png',
  './images/jigglypuff.png',
];

const circles = [
  $pikachuCircle,
  $charmanderCircle,
  $squirtleCircle,
  $bulbasaurCircle,
  $jigglypuffCircle,
];

let currentIndex = 0;

function changePokemon(direction = 1) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  $image.src = images[currentIndex];

  for (let index = 0; index < circles.length; index++) {
    const circle = circles[index];
    if (index === currentIndex) {
      circle.querySelector('i').className = 'fa-solid fa-circle';
    } else {
      circle.querySelector('i').className = 'fa-regular fa-circle';
    }
  }
}

$leftChevron.addEventListener('click', function (event) {
  event.preventDefault();
  changePokemon(-1);
});

$rightChevron.addEventListener('click', function (event) {
  event.preventDefault();
  changePokemon();
});

setInterval(changePokemon, 10000);

circles[0].addEventListener('click', function (event) {
  event.preventDefault();
  $image.src = images[0];
  circles[0].querySelector('i').className = 'fa-solid fa-circle';
  changePokemon();
  changeCircles();
});

circles[1].addEventListener('click', function (event) {
  event.preventDefault();
  $image.src = images[1];
  circles[1].querySelector('i').className = 'fa-solid fa-circle';
  changePokemon();
  changeCircles();
});

circles[2].addEventListener('click', function (event) {
  event.preventDefault();
  $image.src = images[2];
  circles[2].querySelector('i').className = 'fa-solid fa-circle';
  changePokemon();
  changeCircles();
});

circles[3].addEventListener('click', function (event) {
  event.preventDefault();
  $image.src = images[3];
  circles[3].querySelector('i').className = 'fa-solid fa-circle';
  changePokemon();
  changeCircles();
});

circles[4].addEventListener('click', function (event) {
  event.preventDefault();
  $image.src = images[4];
  circles[4].querySelector('i').className = 'fa-solid fa-circle';
  changePokemon();
  changeCircles();
});

function changeCircles() {
  for (let i = 0; i < circles.length; i++) {
    if ($image.src === images[i]) {
      circles[i].querySelector('i').className = 'fa-solid fa-circle';
    } else {
      circles[i].querySelector('i').className = 'fa-regular fa-circle';
    }
  }
}

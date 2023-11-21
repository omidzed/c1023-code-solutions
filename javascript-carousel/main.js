const $views = document.querySelectorAll('.view-container');

function viewSwap(targetView) {
  for (let i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === targetView) {
      $views[i].classList.remove('hidden');
    } else {
      $views[i].classList.add('hidden');
    }
  }
  data.view = targetView;
}

const pokemon = [
  {
    number: '1',
    name: 'pikachu',
    imageUrl: 'images/pikachu.png',
  },
  {
    number: '2',
    name: 'bulbasaur',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '3',
    name: 'charmander',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '4',
    name: 'squirtle',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '5',
    name: 'jigglypuff',
    imageUrl: 'images/jigglypuff.png',
  },
];

function renderPokemon(pokemon) {
  const $columnChevron = document.createElement('div');
  $columnChevron.setAttribute('class', 'column chevron');

  const $chevronLeft = document.createElement('i');
  $chevronLeft.setAttribute('class', 'fa-solid fa-chevron-left chevy');

  const $chevronRight = document.createElement('i');
  $chevronRight.setAttribute('class', 'fa-solid fa-chevron-right chevy');
}

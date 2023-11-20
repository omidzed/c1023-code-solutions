const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

console.log($tabContainer);
console.log($tabList);
console.log($views);

$tabContainer.addEventListener('click', viewSwap);

function viewSwap(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
  }

  if (event.target.matches('.tab')) {
    const view = event.target.getAttribute('data-view');
    console.log(view);
    for (let i = 0; i < $views.length; i++) {
      if ($views[i].getAttribute('data-view') === view) {
        $views[i].setAttribute('class', 'view');
      } else {
        $views[i].setAttribute('class', 'view hidden');
      }
    }
  }
}

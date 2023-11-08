function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('Target property of event: ', event.target);
}
const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);



function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('Target property of event: ', event.target);
}
const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);


function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('Target property of event: ', event.target);
}
const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);

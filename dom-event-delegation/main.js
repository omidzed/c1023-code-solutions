const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log('closest.task-list-item', $taskListItem);
    $taskListItem.remove();
  }
});

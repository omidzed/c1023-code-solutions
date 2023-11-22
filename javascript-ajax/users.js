const $usersList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  const users = xhr.response;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const $li = document.createElement('li');
    $li.textContent = user.name;
    $usersList.appendChild($li);
  }
});
xhr.send();

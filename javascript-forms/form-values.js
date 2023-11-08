const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const submitObject = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };
  console.log('Object extracted from contact form: ', submitObject);
  $contactForm.reset();
});

const form = document.querySelector('.form');

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log("Ok");
  } else {
    console.log('Not OK');
  }
});

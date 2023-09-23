const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from being submitted

  // Get the values of the regnum and password fields
  const regnum = form.elements.regnum.value;
  const password = form.elements.password.value;

  // Validate the form data
  if (regnum === '') {
    message.textContent = 'Please enter a regnum';
    return;
  }
  if (password === '') {
    message.textContent = 'Please enter a password';
    return;
  }
  if (password.length < 8) {
    message.textContent = 'Password must be at least 8 characters long';
    return;
  }

  // If the form data is valid, submit the form
  form.submit();
});
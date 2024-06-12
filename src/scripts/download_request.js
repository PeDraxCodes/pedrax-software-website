const moreInfo = document.getElementById('moreInfo');
let sendEmail = false;

moreInfo.addEventListener('click', () => {
  const popup = document.getElementById('user_popup');
  popup.classList.remove('hidden');

  document.getElementById('darken').classList.remove('hidden');
  document.getElementById('darken').classList.remove('opacity-0');
  document.getElementById('darken').classList.add('opacity-100');
});

const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (sendEmail) {
    return;
  }
  // Bind the subscription form and execute AJAX request
  fetch(emailForm.action, {
    method: 'POST',
    body: new FormData(emailForm),
  })
    .then((response) => response.text())
    .then((data) => {
      // Output the response
      const submitEmail = document.getElementById('submit_email');
      if (data.includes('Fehler')) {
        // Display error message
        submitEmail.classList.add('bg-red-500');
        submitEmail.innerHTML = 'Fehler!';
      } else {
        submitEmail.innerHTML = 'Setup angefragt!';
        submitEmail.classList.remove('bg-blue-700');
        submitEmail.classList.add('bg-green-500');
        submitEmail.classList.remove('hover:bg-blue-800');
        submitEmail.classList.remove('focus:ring-sky-300');
        sendEmail = true;
        setTimeout(() => {
          submitEmail.classList.remove('bg-green-500');
          submitEmail.classList.add('bg-gray-400');
        }, 5000);
      }
    });
});

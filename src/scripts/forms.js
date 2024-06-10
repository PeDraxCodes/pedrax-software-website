// Get the subscription form
const newsletterForm = document.getElementById('submitEmailForm');
// On submit event handler (submit button is pressed)
newsletterForm.onsubmit = (event) => {
  event.preventDefault();
  // Bind the subscription form and execute AJAX request
  fetch(newsletterForm.action, {
    method: 'POST',
    body: new FormData(newsletterForm),
  })
    .then((response) => response.text())
    .then((data) => {
      // Output the response
      document.getElementById('emailSuccess').innerHTML = data;
      if (data.includes('Fehler')) {
        document.getElementById('emailSuccess').classList.add('text-red-500');
      }
    });
};

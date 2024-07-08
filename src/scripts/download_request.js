const downloadRequestButton = document.getElementById('downloadRequestButton');
const closePopup = document.getElementById('close_popup');
let alreadySubmitted = false;

downloadRequestButton.addEventListener('click', () => {
  /*
   * Function to display the user popup
   */
  const popup = document.getElementById('user_popup');
  const darkenPanel = document.getElementById('darken');

  popup.classList.remove('hidden');
  darkenPanel.classList.replace('invisible', 'visible');
  darkenPanel.classList.replace('opacity-0', 'opacity-100');
});

closePopup.addEventListener('click', () => {
  /*
   * Function to close the user popup
   */
  const popup = document.getElementById('user_popup');
  const darkenPanel = document.getElementById('darken');

  popup.classList.add('hidden');
  darkenPanel.classList.replace('opacity-100', 'opacity-0');
  darkenPanel.classList.replace('visible', 'invisible');
});

const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (alreadySubmitted) {
    return;
  }
  // Bind the subscription form and execute AJAX request
  fetch(emailForm.action, {
    method: 'POST',
    body: new FormData(emailForm),
  })
    .then((response) => response.text())
    .then((data) => {
      // Get the submit button object to change its appearance
      const submitEmailButton = document.getElementById('submit_email');

      // Remove all hover effects of button
      for (let i = 0; i < submitEmailButton.classList.length; i += 1) {
        if (submitEmailButton.classList[i].includes('hover:')) {
          submitEmailButton.classList.remove(submitEmailButton.classList[i]);
        }
      }

      // Remove button background color
      for (let i = 0; i < submitEmailButton.classList.length; i += 1) {
        if (submitEmailButton.classList[i].includes('bg-')) {
          submitEmailButton.classList.remove(submitEmailButton.classList[i]);
        }
      }

      // Remove focus effect and set cursor to default
      submitEmailButton.classList.remove('focus:ring-sky-300');
      submitEmailButton.classList.add('hover:cursor-default');

      if (data.includes('Fehler')) {
        // Display error message
        submitEmailButton.classList.add('bg-red-500');
        submitEmailButton.innerHTML = 'Fehler!';
        alreadySubmitted = true;
      } else {
        // Display success message
        submitEmailButton.classList.add('bg-success');
        submitEmailButton.innerHTML = 'Anfrage erfolgreich!';
        alreadySubmitted = true;
      }
    });
});

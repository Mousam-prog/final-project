document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Hide messages
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Disable button
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbwTK5v_T2pMlrJ__HAil7BvpRw7S2QVrU48SrHj-BjxHViyr7yLIHQ-T7YCrJACFqbT8w/exec', {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        successMessage.style.display = "block";
        form.reset();
      } else {
        errorMessage.style.display = "block";
        console.error("Submission error:", data.error);
      }
    })
    .catch(error => {
      errorMessage.style.display = "block";
      console.error("Submission error:", error);
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    });
  });
});

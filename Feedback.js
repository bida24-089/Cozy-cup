vdocument.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackMsg = document.getElementById("feedbackMsg");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default form submission

    // Get values from form
    const name = document.getElementById("feedbackName").value.trim();
    const email = document.getElementById("feedbackEmail").value.trim();
    const message = document.getElementById("feedbackMessage").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      feedbackMsg.textContent = "Please complete all fields.";
      feedbackMsg.style.color = "red";
      return;
    }

    // Show thank-you message
    feedbackMsg.textContent = "Thank you for your feedback!";
    feedbackMsg.style.color = "green";

    // Reset form inputs
    feedbackForm.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
      feedbackMsg.textContent = "";
    }, 5000);
  });
});

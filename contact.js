document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all the fields.";
      formMessage.style.color = "red";
      return;
    }

    // Show success message
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";

    // Optionally clear the form
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = "";
    }, 5000);
  });
});

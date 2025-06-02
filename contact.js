
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const inquiryType = document.getElementById('inquiry-type').value;

      const formMessage = document.getElementById('formMessage');

      if (name && email && message && inquiryType) {
        formMessage.textContent = "Thank you! We’ll get back to you shortly.";
        formMessage.classList.remove("text-danger");
        formMessage.classList.add("text-success");
        this.reset();
      } else {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.classList.remove("text-success");
        formMessage.classList.add("text-danger");
      }
    });

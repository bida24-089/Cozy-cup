document.addEventListener('DOMContentLoaded', () => {
  const reviewCards = document.querySelectorAll('.review-card');

  reviewCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover-effect');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover-effect');
    });
    card.addEventListener('touchstart', () => {
      card.classList.add('hover-effect');
      setTimeout(() => {
        card.classList.remove('hover-effect');
      }, 500); // resets after 500ms for touch
    });
  });

  // Feedback form logic
  document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('feedbackName').value.trim();
    const email = document.getElementById('feedbackEmail').value.trim();
    const message = document.getElementById('feedbackMessage').value.trim();
    const feedbackMsg = document.getElementById('feedbackMsg');

    if (name && email && message) {
      feedbackMsg.textContent = "Thank you for your feedback!";
      feedbackMsg.classList.remove("text-danger");
      feedbackMsg.classList.add("text-success");
      this.reset();
    } else {
      feedbackMsg.textContent = "Please fill in all fields.";
      feedbackMsg.classList.remove("text-success");
      feedbackMsg.classList.add("text-danger");
    }
  });
});

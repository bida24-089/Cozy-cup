document.addEventListener("DOMContentLoaded", function () {
  // ====== Feedback Form Logic ======
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackMsg = document.getElementById("feedbackMsg");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form input values
    const name = document.getElementById("feedbackName").value.trim();
    const email = document.getElementById("feedbackEmail").value.trim();
    const message = document.getElementById("feedbackMessage").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      feedbackMsg.textContent = "Please fill in all fields.";
      feedbackMsg.style.color = "red";
      return;
    }

    // Display popup thank you alert
    alert("Thank you for your feedback, " + name + "!");

    // Show message below the form
    feedbackMsg.textContent = "Your feedback has been received!";
    feedbackMsg.style.color = "green";

    // Reset form
    feedbackForm.reset();

    // Clear feedback message after 5 seconds
    setTimeout(() => {
      feedbackMsg.textContent = "";
    }, 5000);
  });

  // ====== Review Hover Animation ======
  const reviewCards = document.querySelectorAll(".review-card");

  reviewCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover-slide");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover-slide");
    });
  });
});

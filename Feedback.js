// Sample reviews data
const reviews = [
    {
        name: "Alice M.",
        rating: 5,
        comment: "Absolutely love the cozy atmosphere and delicious coffee! The pastries are a must-try. My new favorite spot.",
        date: "May 20, 2025"
    },
    {
        name: "Bob W.",
        rating: 4,
        comment: "Great place for a quick bite and quality coffee. Service is friendly, though it can get a bit busy during peak hours.",
        date: "May 18, 2025"
    },
    {
        name: "Charlie D.",
        rating: 5,
        comment: "The best latte in town, hands down! And the staff always makes you feel welcome. Highly recommend the almond croissant.",
        date: "May 15, 2025"
    },
    {
        name: "Dana L.",
        rating: 4,
        comment: "A pleasant experience overall. Good selection of teas and a comfortable environment to work or relax.",
        date: "May 12, 2025"
    }
];

// Function to render reviews
function renderReviews() {
    const reviewsDisplay = document.getElementById('reviewsDisplay');
    reviewsDisplay.innerHTML = ''; // Clear existing reviews

    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item'); // This class will rely on default/inherited styles

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating); // Visual stars

        reviewItem.innerHTML = `
            <h3>${review.name}</h3>
            <div class="rating">${stars}</div>
            <p>${review.comment}</p>
            <div class="reviewer-info">Reviewed on ${review.date}</div>
        `;
        reviewsDisplay.appendChild(reviewItem);
    });
}

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email-optional').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('feedback-message').value;
    const submissionMessage = document.getElementById('submissionMessage');

    if (!name || !rating || !message) {
        submissionMessage.textContent = "Please fill in all required fields (Name, Rating, Feedback Message).";
        submissionMessage.style.color = "red";
        return;
    }

    // Simulate adding feedback (for dynamic display, not actual storage)
    const newReview = {
        name: name,
        rating: parseInt(rating),
        comment: message,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    reviews.unshift(newReview); // Add new review to the beginning of the array
    renderReviews(); // Re-render reviews to show the new one

    // Show success message
    submissionMessage.textContent = "Thank you for your feedback! It has been submitted.";
    submissionMessage.style.color = "#5a3e36"; // Use main brown color

    // Clear the form
    document.getElementById('feedbackForm').reset();
    document.getElementById('rating').value = ""; // Reset select explicitly
});

// Initial render of reviews when the page loads
document.addEventListener('DOMContentLoaded', renderReviews);

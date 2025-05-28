// JavaScript for the contact form submission on contact.html
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submissionMessage = document.getElementById('contactSubmissionMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form field values
            const name = document.getElementById('inquiry-name').value;
            const email = document.getElementById('inquiry-email').value;
            const message = document.getElementById('inquiry-message').value;
            const inquiryType = document.getElementById('inquiry-type').value;

            // Basic validation
            if (!name || !email || !message || !inquiryType) {
                submissionMessage.textContent = "Please fill in all required fields.";
                submissionMessage.style.color = "red";
                return; // Stop the function if validation fails
            }

            // In a real web application, you would send this data to a server
            // using fetch() or XMLHttpRequest. For this static site,
            // we'll just simulate a successful submission.

            submissionMessage.textContent = "Thank you for your message! We will get back to you shortly.";
            submissionMessage.style.color = "#5a3e36"; // Set color to a theme-appropriate color

            // Clear the form fields after successful (simulated) submission
            contactForm.reset();
            document.getElementById('inquiry-type').value = ""; // Explicitly reset select
        });
    }
});

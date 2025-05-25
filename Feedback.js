document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const responseMessageDiv = document.getElementById('responseMessage');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const ratingInput = document.querySelector('input[name="rating"]:checked');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const rating = ratingInput ? ratingInput.value : 'No rating provided'; // Get selected rating or default

        // --- Basic Validation ---
        let isValid = true;
        let errorMessage = '';

        // Check if name is empty
        if (name === '') {
            isValid = false;
            errorMessage += 'Please enter your name.<br>';
            nameInput.classList.add('error-border'); // Add visual error
        } else {
            nameInput.classList.remove('error-border'); // Remove error if valid
        }

        // Check if message is empty
        if (message === '') {
            isValid = false;
            errorMessage += 'Please enter your feedback message.<br>';
            messageInput.classList.add('error-border'); // Add visual error
        } else {
            messageInput.classList.remove('error-border'); // Remove error if valid
        }

        // Optional: Email format validation (if email is provided)
        if (email !== '' && !isValidEmail(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.<br>';
            emailInput.classList.add('error-border'); // Add visual error
        } else {
            emailInput.classList.remove('error-border'); // Remove error if valid
        }

        // --- Display Response ---
        if (isValid) {
            // In a real application, you would send this data to a server here.
            // For this frontend-only example, we'll just log and display a success message.
            console.log('Feedback Submitted:', {
                name: name,
                email: email,
                rating: rating,
                message: message
            });

            responseMessageDiv.innerHTML = 'Thank you for your feedback! We appreciate it.';
            responseMessageDiv.className = 'success'; // Apply success styling

            // Clear the form fields after successful submission
            feedbackForm.reset();
            // Deselect stars visually
            if (ratingInput) {
                ratingInput.checked = false;
            }

        } else {
            responseMessageDiv.innerHTML = errorMessage;
            responseMessageDiv.className = 'error'; // Apply error styling
        }
    });

    // Helper function for basic email validation
    function isValidEmail(email) {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Optional: Remove error border and message when user starts typing/focuses on input
    const formInputs = feedbackForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.remove('error-border'); // Remove error border
            responseMessageDiv.innerHTML = ''; // Clear message
            responseMessageDiv.className = ''; // Remove styling
        });
    });
});


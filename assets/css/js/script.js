/* ---
   Mind Balance JavaScript File
   Fixes: 1.2 (Connects form to an alert)
--- */

// Wait for the DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    
    // Find the form by its ID
    const signupForm = document.getElementById("signup-form");

    // Add submit event listener only if the form exists on this page
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            
            // Prevent the default form submission (stops the page from reloading)
            event.preventDefault();

            // Show the alert
            alert("Thank you for signing up! We'll contact you soon.");
            
            // Optional: Reset the form fields after successful submission
            signupForm.reset();
        });
    }
});
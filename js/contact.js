(function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
})();

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        document.querySelector('button[type="submit"]').textContent = 'Sending...';
        
        // Get form data
        const formData = {
            to_email: "rj.rohit94@outlook.com", // Your Outlook email address
            from_name: this.first_name.value + ' ' + this.last_name.value,
            from_email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        };

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then(function() {
                // Show success message
                alert('Thank you! Your message has been sent.');
                
                // Reset form
                document.getElementById('contactForm').reset();
                
                // Reset button text
                document.querySelector('button[type="submit"]').textContent = 'Send Now';
            }, function(error) {
                // Show error message
                console.error('Error:', error);
                alert('Sorry, there was an error sending your message. Please try again.');
                
                // Reset button text
                document.querySelector('button[type="submit"]').textContent = 'Send Now';
            });
    });
};

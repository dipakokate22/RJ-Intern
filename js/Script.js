
(function() {
    emailjs.init("voBGRHanqiAfTjj-w"); // Replace with your Public Key
  })();

  function sendMail() {
    let params = {
        first_name: document.getElementsByName("first_name")[0].value,
        last_name: document.getElementsByName("last_name")[0].value,
        email: document.getElementsByName("email")[0].value,
        subject: document.getElementsByName("subject")[0].value,
        message: document.getElementsByName("message")[0].value
    };

    emailjs.send("service_bpfmzvc", "template_tq7p8u8", params)
    .then(function(response) {
        alert("Email sent successfully!");
        document.getElementById("contactForm").reset(); // Reset form
    }, function(error) {
        alert("Failed to send email. Please try again.");
    });
  }

  // Attach sendMail function to the form submit event
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      sendMail();
  });


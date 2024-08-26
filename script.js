// Contact Form Submission
// Initialize EmailJS with your public key
emailjs.init("e1XnJ0JLe5j46LU5j");

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send form data to EmailJS
    emailjs.sendForm('service_xte9q1i', 'template_3zqygn5', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
        });
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    // Remove "active" class from all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    // Add "active" class to the current slide
    slides[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



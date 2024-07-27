// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementById('submit-button');
    const contactForm = document.querySelector('.contact form');
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const contactPage = document.querySelector('.contact');
        contactPage.innerHTML = '<p style="font-size: 24px; text-align: center;">Thank you for your message</p>';
    });
});


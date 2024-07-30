document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Comment form functionality
    const commentForm = document.getElementById("commentForm");
    const commentText = document.getElementById("commentText");
    const commentsSection = document.querySelector(".comments");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p><strong>You:</strong> ${commentText.value}</p>`;
        
        commentsSection.insertBefore(newComment, commentForm);
        commentText.value = "";
    });

    // Contact form functionality
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        alert("Message sent! Thank you for contacting us.");
        contactForm.reset();
    });
});

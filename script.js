// Learn More Button
document.getElementById("learnBtn").addEventListener("click", () => {
    alert("Welcome to She Can Foundation!");
});

// Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successMessage").innerText =
        "Form Submitted Successfully!";
});
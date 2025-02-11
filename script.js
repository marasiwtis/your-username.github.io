document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        
        // Validate Fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("❌ Please fill in all fields.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("❌ Please enter a valid email.");
            return;
        }

        // Simulate sending the form (you can replace this with an actual email service)
        form.reset();
        formMessage.classList.remove("hidden");
        setTimeout(() => formMessage.classList.add("hidden"), 3000);
    });
});

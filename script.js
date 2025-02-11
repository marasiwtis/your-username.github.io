document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Send the form using Formspree
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                formMessage.textContent = "✅ Message Sent Successfully!";
                formMessage.classList.remove("hidden");
                formMessage.style.color = "green";
                form.reset();
            } else {
                formMessage.textContent = "❌ Failed to send message. Try again.";
                formMessage.classList.remove("hidden");
                formMessage.style.color = "red";
            }
        })
        .catch(() => {
            formMessage.textContent = "❌ Network error. Please try again later.";
            formMessage.classList.remove("hidden");
            formMessage.style.color = "red";
        });

        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.classList.add("hidden");
        }, 3000);
    });
});

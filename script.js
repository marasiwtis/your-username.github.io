document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_USER_ID")
            .then(function () {
                alert("✅ Message sent successfully!");
                form.reset();
            }, function (error) {
                alert("❌ Failed to send message. Try again.");
                console.error(error);
            });
    });
});

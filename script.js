document.addEventListener("DOMContentLoaded", function () {
    // 1. Handle Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formActionURL = "https://docs.google.com/forms/d/e/1FAIpQLSd31RXuDG6GI39c-koWqNSVqRfIAshd0FaVH-aRbA0JfBWxMw/formResponse";

        const formData = new FormData();
        formData.append("entry.2005620554", document.getElementById("name").value);
        formData.append("entry.1045781291", document.getElementById("email").value);
        formData.append("entry.839337160", document.getElementById("message").value);

        fetch(formActionURL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            setTimeout(() => {
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();
            }, 500);
        }).catch((error) => {
            console.error("Submission error!", error);
        });
    });

    /
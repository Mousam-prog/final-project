document.getElementById("payment-mode").addEventListener("change", function() {
    let cardDetails = document.getElementById("card-details");
    let upiDetails = document.getElementById("upi-details");
    if (this.value === "card") {
        cardDetails.style.display = "block";
        upiDetails.style.display = "none";
    } else if (this.value === "upi") {
        cardDetails.style.display = "none";
        upiDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
        upiDetails.style.display = "none";
    }
});

document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("thank-you").style.display = "block";
    this.style.display = "none";
});
    document.addEventListener("DOMContentLoaded", function () {
        const registerBtn = document.getElementById("register-btn");
        const container4 = document.querySelector(".container4");
        const container3 = document.getElementById("container3");

        registerBtn.addEventListener("click", function () {
            container4.style.display = "none";
            container3.style.display = "block";
        });
    });


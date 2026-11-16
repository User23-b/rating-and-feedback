// QR code (replace URL with your published website URL)
let websiteURL = window.location.href;

document.getElementById("qrImage").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(websiteURL);

// Submit evaluation
document.getElementById("evaluationForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("result").innerHTML =
        "Thank you! Your evaluation has been submitted.";

    this.reset();
});

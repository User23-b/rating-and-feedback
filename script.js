// QR code generator
let websiteURL = window.location.href;

document.getElementById("qrImage").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(websiteURL);

// Submit evaluation with a popup alert
document.getElementById("evaluationForm")
.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // This makes the pop-up notification appear
    alert("Thank you! Your evaluation has been submitted.");

    this.reset(); // Clears the form fields
});

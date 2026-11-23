// Submit evaluation and trigger toast popup
document.getElementById("evaluationForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let toast = document.getElementById("toast");
    
    // Add the "show" class to make the toast fade in
    toast.className = "toast show";

    // After 3 seconds, remove the "show" class so it fades out
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);

    // Reset the form fields
    this.reset();
});

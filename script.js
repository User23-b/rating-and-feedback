let submissionCount = 0;

// Submit evaluation, trigger top-center toast, and add entry to bottom-left history list
document.getElementById("evaluationForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    submissionCount++;
    let historyList = document.getElementById("historyList");

    // Remove the default "No submissions yet" message on the first submit
    if (submissionCount === 1) {
        historyList.innerHTML = "";
    }

    // Add a new entry to the history list
    let listItem = document.createElement("li");
    let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    listItem.textContent = `Evaluation #${submissionCount} submitted at ${timestamp}`;
    historyList.appendChild(listItem);

    // Trigger the top-center toast notification
    let toast = document.getElementById("toast");
    toast.className = "toast show";

    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);

    // Reset the form fields
    this.reset();
});

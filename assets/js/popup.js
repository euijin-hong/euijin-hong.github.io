document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("closePopup");
    var detailButtons = document.querySelectorAll(".button[data-action='detail']");

    // Function to show the popup
    function showPopup() {
        popup.style.display = "block";
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = "none";
    }

    // Add click event listener to each "Detail" button
    detailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            showPopup();
            // Scroll to the popup
            window.location.hash = "#detail";
        });
    });

    // Add click event listener to the close button
    closeButton.addEventListener("click", function () {
        hidePopup();
    });

    // Hide the popup when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            hidePopup();
        }
    });

    // Hide the popup when pressing the ESC key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hidePopup();
        }
    });
});

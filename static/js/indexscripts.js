/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with data-bs-toggle="popover"
    var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

    // Initialize each popover
    var popoverList = [...popoverTriggerList].map(popoverTriggerEl => {
        return new bootstrap.Popover(popoverTriggerEl, {
            container: 'body' // Ensures popovers don’t break layout
        });
    });

    // Optional: Close popovers when clicking outside
    document.addEventListener("click", function (event) {
        popoverList.forEach(popover => {
            if (!popover._element.contains(event.target)) {
                popover.hide();
            }
        });
    });
});

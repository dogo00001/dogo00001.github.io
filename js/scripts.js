/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navbar Toggle Fix (Event Delegation)
    const navCollapse = document.querySelector(".navbar-collapse");

    document.body.addEventListener("click", (e) => {
        if (e.target.closest(".navbar-nav .nav-link")) {
            if (navCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navCollapse, { toggle: true });
            }
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            if (href.startsWith("#") && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Newsletter Signup Alert with Email Validation
    /*document.getElementById("button-newsletter").addEventListener("click", function () {
        const emailInput = document.getElementById("newsletter-email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailInput.value.trim())) {
            alert("Thank you for signing up! We will keep you updated.");
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });*/
});

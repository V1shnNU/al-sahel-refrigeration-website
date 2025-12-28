/**
 * Al-Sahel Refrigeration - Main Script
 * Version: 1.0.0
 * Architecture: Modular Vanilla JS
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialize Navigation Logic
    initNavigation();

    // 2. Initialize Original User Logic (from screenshot)
    initLegacyButtons();

    // 3. Initialize Form Validation
    initContactForm();

});

/**
 * Handles legacy button clicks provided in initial requirement
 */
function initLegacyButtons() {
    
    // Login Button
    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function(e) {
            e.preventDefault();
            alert("Login portal is currently under maintenance. Please try again later.");
        });
    }

    // Signup Button
    var signupBtn = document.getElementById("signupBtn");
    if (signupBtn) {
        signupBtn.addEventListener("click", function(e) {
            e.preventDefault();
            alert("Registration is temporarily closed to new providers.");
        });
    }

    // Book Service Button
    var bookServiceBtn = document.getElementById("bookServiceBtn");
    if (bookServiceBtn) {
        bookServiceBtn.addEventListener("click", function() {
            // Smooth scroll to contact form
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Call Now Button
    var callNowBtn = document.getElementById("callNowBtn");
    if (callNowBtn) {
        callNowBtn.addEventListener("click", function() {
            // Using a sample UAE business number format
            window.location.href = "tel:+971000000000";
        });
    }
}

/**
 * Handles Mobile Menu and Navigation interactions
 */
function initNavigation() {
    var nav = document.querySelector('.navbar');
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            nav.style.boxShadow = "none";
        }
    });
}

/**
 * Handles Contact Form Validation and Submission
 */
function initContactForm() {
    var form = document.getElementById('serviceForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('userName').value;
            var email = document.getElementById('userEmail').value;
            
            if (name.length < 2) {
                alert("Please enter a valid name.");
                return;
            }

            // Simple success simulation
            var submitBtn = form.querySelector('button');
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            setTimeout(function() {
                alert("Thank you " + name + "! Our technician will call you shortly.");
                form.reset();
                submitBtn.innerText = "Send Request";
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}
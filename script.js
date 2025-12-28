// Basic button interactions (frontend only)

document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Login page will be added next");
});

document.getElementById("signupBtn").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Sign Up page will be added next");
});

document.getElementById("bookServiceBtn").addEventListener("click", function () {
  alert("Service booking flow coming soon");
});

document.getElementById("callNowBtn").addEventListener("click", function () {
  window.location.href = "tel:+971000000000"; // replace with real number later
});

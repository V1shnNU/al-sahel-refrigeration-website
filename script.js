function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeSignup() {
  document.getElementById("signupModal").style.display = "none";
}

function switchToSignup() {
  closeLogin();
  openSignup();
}

function switchToLogin() {
  closeSignup();
  openLogin();
}

function fakeLogin() {
  alert("Login successful (frontend only)");
  closeLogin();
}

function fakeSignup() {
  alert("Signup successful (frontend only)");
  closeSignup();
}

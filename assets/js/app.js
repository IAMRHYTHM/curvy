// app.js

document.addEventListener("DOMContentLoaded", function () {
  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const info = document.querySelector(".alert-info");
  const error = document.querySelector(".alert-error");

  function process(event) {
    event.preventDefault();

    // Validate other fields
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!fname || !lname || !email || !message) {
      error.style.display = "";
      error.innerHTML = "All fields are required!";
      return;
    }

    const phoneNumber = phoneInput.getNumber();

    if (!phoneNumber) {
      error.style.display = "";
      error.innerHTML = "Please enter a valid phone number!";
      return;
    }

    // Clear previous error messages
    error.style.display = "none";

    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
  }

  function sendEmail() {
    // Add email validation or other checks if needed

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "username",
      Password: "password",
      To: "them@website.com",
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  }

  // Attach event listeners or any additional functionality as needed
  const submitButton = document.querySelector(".btn-animated");
  if (submitButton) {
    submitButton.addEventListener("click", process);
  }

  const emailButton = document.querySelector(".email-button");
  if (emailButton) {
    emailButton.addEventListener("click", sendEmail);
  }
});

"use strict";

username = document.getElementById("username");
password = document.getElementById("password");
form = document.getElementById("myform");
button = document.getElementById("submit");
var submits = 0;
var attempts = 3;
document.addEventListener('submit', function () {
  if (username.value !== 'admin' || password.value !== 'User@2023') {
    form.action = "#";
    password.value = null;
    submits++;
    attempts--;

    if (submits >= 3) {
      alert("Too many atempts, account blocked!");
      button.setAttribute('disabled', true);
    } else {
      alert("Incorrect: ".concat(attempts, " attemps remaining"));
    }
  } else {
    alert("                                                 Welcome!");
    form.action = "/admin/adminHome";
  }
});
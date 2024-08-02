// script.js
let users = [];

document.getElementById("signup-link").addEventListener("click", function() {
    document.getElementsByClassName("login-page")[0].style.display = "none";
    document.getElementsByClassName("signup-page")[0].style.display = "block";
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (password === confirmPassword) {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementsByClassName("signup-page")[0].style.display = "none";
        document.getElementsByClassName("login-page")[0].style.display = "block";
    } else {
        alert("Passwords do not match");
    }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    let user = storedUsers.find(user => user.username === username && user.password === password);
    if (user) {
        window.location.href = "user-page.html";
    } else {
        alert("Invalid username or password");
    }
});

// New code
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Add your login logic here
    // For demonstration purposes, I'll just hide the login form and show the user specific page
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-link").style.display = "none";
    document.getElementsByClassName("user-page")[0].style.display = "block";
});

document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    // Add your logic here to handle the user form submission
});
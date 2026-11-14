let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");
let logo = document.getElementById("logo");

// Mobile Menu Open and Close
menuBtn.addEventListener("click", function () {

    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    let isOpen = !menu.classList.contains("hidden");

    menuBtn.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        logo.classList.add("hidden");
        menuBtn.textContent = "×";
    } else {
        logo.classList.remove("hidden");
        menuBtn.textContent = "☰";
    }

});

// Close Menu After Clicking Link
let links = menu.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.add("hidden");
        menu.classList.remove("flex");

        logo.classList.remove("hidden");
        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

let images = [
    "gallery/bg-img1.jpg",
    "gallery/bg-imag2.jpg",
    "gallery/bg-img3.jpg",
    "gallery/bg-img4.jpg"
];

let index = 0;

setInterval(function() {

    index++;

    if(index == images.length) {
        index = 0;
    }

    document.getElementById("hero").style.backgroundImage =
    "url('" + images[index] + "')";

}, 2000);

// Mobile Menu




// Syllabus Buttons

const syllabusButtons = document.querySelectorAll(".syllabusButton");

syllabusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("The syllabus will be available soon.");

    });

});



// Fee Calculator
document.getElementById("calculate").addEventListener("click", function() {

    let class9 = Number(document.getElementById("class9").value) || 0;
    let class10 = Number(document.getElementById("class10").value) || 0;
    let firstYear = Number(document.getElementById("firstYear").value) || 0;
    let secondYear = Number(document.getElementById("secondYear").value) || 0;

    let total = (class9 * 3000) +
                (class10 * 3500) +
                (firstYear * 5000) +
                (secondYear * 5500);

    document.getElementById("totalFee").innerText =
        "Rs. " + total.toLocaleString("en-PK");
s
});


/// Admission Form
let admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
    admissionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Yes! Your admission application has been submitted successfully.");

        this.reset();
    });
}

// Contact Form
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Yes! Your message has been submitted successfully.");

        this.reset();
    });
}
// Login Form
let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Congratulations! You have logged in successfully.");

        this.reset();

    });
}
// Register Form
let registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match! Please enter the same password.");
            return;
        }

        alert("Registration Successful! Welcome " + name);

        this.reset();
    });
}
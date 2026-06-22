function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// Đóng menu khi bấm vào link trên điện thoại
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        const navMenu = document.getElementById("navMenu");
        navMenu.classList.remove("active");
    });
});

// Form liên hệ
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã liên hệ!");
    form.reset();
});
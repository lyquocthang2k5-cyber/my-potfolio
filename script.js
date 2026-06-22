function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// Đóng menu khi bấm vào link trên mobile
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const navMenu = document.getElementById("navMenu");
        navMenu.classList.remove("active");
    });
});

// Thông báo khi gửi form
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã liên hệ!");
    form.reset();
});
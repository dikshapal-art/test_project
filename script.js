window.addEventListener("scroll", function() {
    const navbar = document.getElementById("mynav");
    if (window.scrollY > 50) {
        navbar.classList.add("grayscale");
    } else {
        navbar.classList.remove("grayscale");
    }
});

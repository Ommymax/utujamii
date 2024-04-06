// JavaScript for image slider
let slideIndex = 0;
const slides = document.getElementsByClassName("slider-image");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

showSlides();

let slideIndex = 1;
let totalSlides = 6; // Diák száma, dinamikusan kezelhető

// Diák dinamikus hozzáadása
function loadSlides() {
    let slideshowContainer = document.getElementById('slideshow-container');

    for (let i = 1; i <= totalSlides; i++) {
        // Slide div létrehozása
        let slideDiv = document.createElement('div');
        slideDiv.classList.add('slide', 'fade');

        // Kép hozzáadása
        let img = document.createElement('img');
        img.src = `images/image${i}.jpg`; // Képek az "images" mappában
        img.alt = `Slide ${i}`;
        slideDiv.appendChild(img);

        // Slide hozzáadása a containerhez
        slideshowContainer.appendChild(slideDiv);
    }
}

// Megjeleníti a megfelelő slide-ot
function showSlides(n) {
    let slides = document.getElementsByClassName('slide');

    if (n > slides.length) { 
        slideIndex = 1; 
        // Újraindítás vizuális effekt
        slides[slideIndex - 1].classList.add('restart');
        setTimeout(() => slides[slideIndex - 1].classList.remove('restart'), 500);
    }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

// Slide váltás
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Indítás
window.onload = function() {
    loadSlides();
    showSlides(slideIndex);
};

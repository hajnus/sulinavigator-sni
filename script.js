let slideIndex = 1;
let totalSlides = 6; // Jelenleg 6 képed van, de ezt dinamikusan kezelheted a képek számával

// Diák dinamikus hozzáadása
function loadSlides() {
    let slideshowContainer = document.getElementById('slideshow-container');

    for (let i = 1; i <= totalSlides; i++) {
        // Létrehozzuk a slide divet
        let slideDiv = document.createElement('div');
        slideDiv.classList.add('slide', 'fade');

        // Kép hozzáadása a slide-hoz
        let img = document.createElement('img');
        img.src = `images/image${i}.jpg`; // A képek az "images" mappában vannak
        img.alt = `Slide ${i}`;
        slideDiv.appendChild(img);

        // Slide hozzáadása a containerhez
        slideshowContainer.appendChild(slideDiv);
    }
}

// Jelenítse meg a megfelelő slide-ot
function showSlides(n) {
    let slides = document.getElementsByClassName('slide');

    if (n > slides.length) { slideIndex = 1 }
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

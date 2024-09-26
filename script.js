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
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');

    // Ellenőrizzük, hogy a diák indexe kívül esik-e a határokon
    if (n > slides.length) { 
        slideIndex = slides.length; // Utolsó diára állítjuk
    } else if (n < 1) { 
        slideIndex = 1; // Első diára állítjuk
    }

    // Az összes diát elrejtjük
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Csak az aktuális diát jelenítjük meg
    slides[slideIndex - 1].style.display = 'block';

    // Gombok aktiválásának/inaktiválásának kezelése
    if (slideIndex === 1) {
        prevButton.style.pointerEvents = 'none';
        prevButton.style.opacity = '0.5';
    } else {
        prevButton.style.pointerEvents = 'auto';
        prevButton.style.opacity = '1';
    }

    if (slideIndex === slides.length) {
        nextButton.style.pointerEvents = 'none';
        nextButton.style.opacity = '0.5';
    } else {
        nextButton.style.pointerEvents = 'auto';
        nextButton.style.opacity = '1';
    }
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

let slideIndex = 1;
let totalSlides = 9; // Ennyi képed van (image1.jpg-től image9.jpg-ig)

// Diák dinamikus hozzáadása
function loadSlides() {
    let slideshowContainer = document.getElementById('slideshow-container');
    let dotsContainer = document.getElementById('dots-container');

    for (let i = 1; i <= totalSlides; i++) {
        // Létrehozzuk a slide divet
        let slideDiv = document.createElement('div');
        slideDiv.classList.add('slide', 'fade');

        // Kép hozzáadása a slide-hoz
        let img = document.createElement('img');
        img.src = `image${i}.jpg`; // A képek image1.jpg, image2.jpg stb.
        img.alt = `Slide ${i}`;
        slideDiv.appendChild(img);

        // Slide hozzáadása a containerhez
        slideshowContainer.appendChild(slideDiv);

        // Dot hozzáadása a dots containerhez
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('onclick', `currentSlide(${i})`);
        dotsContainer.appendChild(dot);
    }
}

// Jelenítse meg a megfelelő slide-ot
function showSlides(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Indítás
window.onload = function() {
    loadSlides();
    showSlides(slideIndex);
};

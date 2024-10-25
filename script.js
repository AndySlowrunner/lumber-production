const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev-slide', 'next-slide');

        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('prev-slide');
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add('next-slide');
        }
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

// Ініціалізація
updateSlider();

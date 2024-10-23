document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicators = document.querySelector('.carousel-indicators');

    let currentIndex = 1;
    const totalItems = items.length;

    for (let i = 1; i <= totalItems - 2; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => goToSlide(i));
        indicators.appendChild(indicator);
    }

    const indicatorDots = indicators.querySelectorAll('.indicator');

    function updateCarousel(transition = true) {
        if (!transition) {
            carousel.style.transition = 'none';
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex - 1);
        });
        if (!transition) {
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 10);
        }
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        startAutoPlay();
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();
        if (currentIndex === totalItems - 1) {
            setTimeout(() => {
                currentIndex = 1;
                updateCarousel(false);
            }, 600);
        }
        startAutoPlay();
    }

    function prevSlide() {
        currentIndex--;
        updateCarousel();
        if (currentIndex === 0) {
            setTimeout(() => {
                currentIndex = totalItems - 2;
                updateCarousel(false);
            }, 600);
        }
        startAutoPlay();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    let intervalId;

    function startAutoPlay() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 3500);
    }

    startAutoPlay();

    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoPlay();
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
        startAutoPlay();
    });

    updateCarousel();
});
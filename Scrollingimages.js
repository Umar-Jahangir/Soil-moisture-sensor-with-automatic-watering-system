// Image Gallery Scroll Functionality
let currentIndex = 0;

function scrollGallery(direction) {
    const galleryTrack = document.querySelector('.gallery-track');
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Loop to the last image
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Loop to the first image
    }

    const offset = -currentIndex * 100;
    galleryTrack.style.transform = `translateX(${offset}%)`;
}
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const thumbnailTexts = document.querySelectorAll(".thumbnail-text");

let currentIndex = 0;

// Update main image and associated text
function updatePreview(index) {
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index); // Highlight active thumbnail
    });

    thumbnailTexts.forEach((text, i) => {
        text.style.display = i === index ? "block" : "none"; // Show/hide text
    });

    const selectedThumbnail = thumbnails[index];
    mainImage.src = selectedThumbnail.getAttribute("data-preview"); // Change image
}

// Thumbnail click event
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index;
        updatePreview(currentIndex);
    });
});

// Next button functionality
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updatePreview(currentIndex);
});

// Previous button functionality
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updatePreview(currentIndex);
});

// Initialize with the first image
updatePreview(currentIndex);
const track = document.querySelector('.yousuf-slider-track');
const slides = document.querySelectorAll('.yousuf-slide');
const yousufprevBtn = document.querySelector('.yousuf-prev-btn');
const yousufnextBtn = document.querySelector('.yousuf-next-btn');

let yousufcurrentIndex = 0;
const slidesToShow = 4; // Number of images to slide at a time
const slideWidth = slides[0].offsetWidth + 10; // Adjusting the width of each image, including margin
const totalSlides = 16;

// Update slider position
function updateSlider() {
    const offset = -(yousufcurrentIndex * slideWidth);
    track.style.transform = `translateX(${offset}px)`; // Moving the track to the new position
    toggleButtons(); // Check and toggle button visibility after updating the position
}

// Function to toggle button visibility
function toggleButtons() {
    if (yousufcurrentIndex <= 0) {
        yousufprevBtn.style.display = 'none'; // Hide previous button when at the start
    } else {
        yousufprevBtn.style.display = 'block'; // Show previous button when not at the start
    }

    if (yousufcurrentIndex >= totalSlides - slidesToShow) {
        yousufnextBtn.style.display = 'none'; // Hide next button when at the end
    } else {
        yousufnextBtn.style.display = 'block'; // Show next button when not at the end
    }
}

// Next button (Move 4 images at a time)
yousufnextBtn.addEventListener('click', () => {
    if (yousufcurrentIndex < totalSlides - slidesToShow) {
        yousufcurrentIndex += slidesToShow; // Move 4 images at once
        updateSlider();
    }
});

// Previous button (Move 4 images at a time)
yousufprevBtn.addEventListener('click', () => {
    if (yousufcurrentIndex > 0) {
        yousufcurrentIndex -= slidesToShow; // Move 4 images back at once
        updateSlider();
    }
});

// Initialize the slider by calling the update function initially
updateSlider();

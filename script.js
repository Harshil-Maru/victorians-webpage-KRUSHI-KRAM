// JavaScript to add cursor effect for each feature section

const featureSections = document.querySelectorAll('.feature');

featureSections.forEach((section) => {
    section.addEventListener('mouseenter', () => {
        const video = section.querySelector('.feature-video');
        video.style.transform = "scale(1.1)"; // Zoom in effect
    });

    section.addEventListener('mouseleave', () => {
        const video = section.querySelector('.feature-video');
        video.style.transform = "scale(1)"; // Reset zoom effect
    });
});

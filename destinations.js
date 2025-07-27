document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImage.src = image.src; // Set the full-screen image source
            fullscreenOverlay.classList.add('active'); // Show the overlay
            document.body.style.overflow = 'hidden'; // Prevent scrolling the background
        });
    });

    // Close full-screen when clicking on the overlay
    fullscreenOverlay.addEventListener('click', () => {
        fullscreenOverlay.classList.remove('active'); // Hide the overlay
        fullscreenImage.src = ''; // Clear the image source (optional, but good practice)
        document.body.style.overflow = ''; // Re-enable background scrolling
    });

    // Close full-screen when pressing the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
            fullscreenOverlay.classList.remove('active');
            fullscreenImage.src = '';
            document.body.style.overflow = '';
        }
    });
});
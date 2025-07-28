//The credit for this feature belongs to Omer Nadler the one and only.
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImage.src = image.src; 
            fullscreenOverlay.classList.add('active'); 
            document.body.style.overflow = 'hidden'; // Prevent scrolling the background
        });
    });

    // Close full-screen when clicking 
    fullscreenOverlay.addEventListener('click', () => {
        fullscreenOverlay.classList.remove('active'); // Hide 
        fullscreenImage.src = ''; // Clear 
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
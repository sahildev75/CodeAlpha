document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
        lightbox.setAttribute('aria-hidden', 'false');
        lightboxImg.setAttribute('alt', item.alt); // Update alt text for accessibility
    });
});

document.querySelector('.close').addEventListener('click', () => {
    closeLightbox();
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target !== document.getElementById('lightbox-img')) {
        closeLightbox();
    }
});

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
}

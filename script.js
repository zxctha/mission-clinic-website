// HEADER SCROLL EFFECT
window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});

// MOBILE MENU
window.addEventListener('DOMContentLoaded', () => {

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.menu-close');

    if (mobileMenuBtn && mobileMenu && menuClose) {

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

    }

});

// LUCIDE ICONS
lucide.createIcons();


// IMAGE LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-image");

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        imageLightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

lightboxClose.addEventListener("click", () => {
    imageLightbox.classList.remove("active");
});

imageLightbox.addEventListener("click", (e) => {

    if (e.target === imageLightbox) {
        imageLightbox.classList.remove("active");
    }

});

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

// PHYSICAL EXAM MODAL

const physicalCard = document.getElementById("physicalExamCard");
const physicalModal = document.getElementById("physicalExamModal");
const closePhysicalModal = document.getElementById("closePhysicalModal");

if (physicalCard && physicalModal && closePhysicalModal) {

    physicalCard.addEventListener("click", () => {
        physicalModal.classList.add("active");
    });

    closePhysicalModal.addEventListener("click", () => {
        physicalModal.classList.remove("active");
    });

    physicalModal.addEventListener("click", (e) => {

        if (e.target === physicalModal) {
            physicalModal.classList.remove("active");
        }

    });

}

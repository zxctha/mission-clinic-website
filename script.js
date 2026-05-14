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

// SERVICES DATABASE

const services = {

    laboratory: [
        "BCP 1 - ₱1,250",
        "BCP 2 - ₱1,400",
        "BCP 3 - ₱1,550",
        "BCP 4 - ₱1,750",

        "PP1 - ₱650",
        "PP2 - ₱1,250",
        "PP3 - ₱2,450"
    ],

    ultrasound: [
        "Whole Abdomen - ₱1,200",
        "Upper / Lower Abdomen - ₱1,000",
        "Pelvic / TAS - ₱500",
        "Biophysical Scoring (BPS) - ₱900"
    ],

    obgyn: [
        "Pap Smear",
        "Prenatal Check-up",
        "Infertility Work-up"
    ],

    preemployment: [
        "PE A - ₱450",
        "PE B - ₱670"
    ],

    vaccination: [
        "Hepa B Vaccine",
        "Flu Vaccine"
    ]

};

// DYNAMIC SERVICE DROPDOWN

const categorySelect =
document.getElementById("serviceCategory");

const packageSelect =
document.getElementById("servicePackage");

if (categorySelect && packageSelect) {

    categorySelect.addEventListener("change", () => {

        const selectedCategory =
        categorySelect.value;

        packageSelect.innerHTML =
        '<option value="">Select Package</option>';

        if (services[selectedCategory]) {

            services[selectedCategory].forEach(service => {

                const option =
                document.createElement("option");

                option.value = service;

                option.textContent = service;

                packageSelect.appendChild(option);

            });

        }

    });

}

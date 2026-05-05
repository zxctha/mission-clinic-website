// MISSION LABORATORY MEDICAL CLINIC - FINAL JS

document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // HEADER SCROLL EFFECT
    // =========================
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // =========================
    // MOBILE MENU
    // =========================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.menu-close');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }


    // =========================
    // BOOKING FORM (EMAILJS)
    // =========================
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const btn = this.querySelector('button[type="submit"]');
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            // ✅ GET VALUES (FIXED)
            const data = {
                name: this.querySelector('input[type="text"]').value,
                phone: this.querySelector('input[type="tel"]').value,
                service: this.querySelector('select').value,
                date: this.querySelector('input[type="date"]').value
            };

            // ✅ EMAILJS SEND
            emailjs.send("service_zs1jkqj", "template_contact", data)
            .then(() => {

                const container = document.querySelector('.form-side');

                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <h2>✅ Appointment Sent!</h2>
                        <p>We will contact you shortly.</p>
                        <a href="index.html" class="btn btn-primary">Back to Home</a>
                    </div>
                `;

            })
            .catch((error) => {
                alert("❌ Failed to send. Check EmailJS setup.");
                console.error(error);

                btn.innerHTML = 'Confirm Appointment Request';
                btn.disabled = false;
            });
        });
    }


    // =========================
    // CONTACT FORM (EMAILJS)
    // =========================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e){
            e.preventDefault();

            emailjs.send("service_zs1jkqj", "template_contact", {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            })
            .then(() => {
                alert("✅ Message sent successfully!");
                contactForm.reset();
            })
            .catch((error) => {
                alert("❌ Failed to send message");
                console.error(error);
            });
        });
    }


    // =========================
    // LUCIDE ICONS FIX
    // =========================
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

});

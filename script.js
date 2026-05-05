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

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (menuClose) {
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

            // ✅ SAFE DATA (using name attributes)
            const data = {
                name: this.querySelector('[name="name"]').value,
                phone: this.querySelector('[name="phone"]').value,
                service: this.querySelector('[name="service"]').value,
                date: this.querySelector('[name="date"]').value
            };

            // ✅ SEND EMAIL
            emailjs.send("service_zs1jkqj", "template_booking", data)
            .then(() => {

                const container = document.querySelector('.form-side');
                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <div style="width:80px;height:80px;background:#dcfce7;color:#16a34a;border-radius:50%;
                        display:flex;align-items:center;justify-content:center;margin:0 auto 2rem;">
                            <i data-lucide="check-circle-2" size="48"></i>
                        </div>

                        <h2>Appointment Sent!</h2>
                        <p>We will contact you shortly.</p>
                    </div>
                `;

                // 🔥 RELOAD ICONS
                if (window.lucide) {
                    lucide.createIcons();
                }

            })
            .catch((error) => {
                alert("Failed to send. Check your setup.");
                console.error(error);

                btn.innerHTML = 'Confirm Appointment Request';
                btn.disabled = false;
            });
        });
    }


    // =========================
    // CONTACT FORM (EMAILJS)
    // =========================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const btn = this.querySelector('button');
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            const data = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                message: this.querySelector('#message').value
            };

            emailjs.send("service_zs1jkqj", "template_contact", data)
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
                btn.innerHTML = 'Send Message';
                btn.disabled = false;
            })
            .catch((error) => {
                alert("Failed to send message.");
                console.error(error);
                btn.innerHTML = 'Send Message';
                btn.disabled = false;
            });
        });
    }


    // =========================
    // ICON INIT (GLOBAL FIX)
    // =========================
    if (window.lucide) {
        lucide.createIcons();
    }

});

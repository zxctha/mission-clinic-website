// MISSION LABORATORY MEDICAL CLINIC - STATIC JS

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
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

   // Booking Form Submission (EMAILJS VERSION)
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        // 🔥 KUHANIN DATA
        const data = {
            name: this.querySelector('input[placeholder="Juan Dela Cruz"]').value,
            phone: this.querySelector('input[placeholder="0912 345 6789"]').value,
            service: this.querySelector('select').value,
            date: this.querySelector('input[type="date"]').value
        };

        // 🔥 SEND EMAIL
        emailjs.send("service_zs1jkqj", "service_zs1jkqj", data)
        .then(() => {
            const container = document.querySelector('.form-side');
            container.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <h2>✅ Appointment Sent!</h2>
                    <p>We will contact you shortly.</p>
                </div>
            `;
        })
        .catch((error) => {
            alert("❌ Failed to send. Check your setup.");
            console.error(error);
            btn.innerHTML = 'Confirm Appointment Request';
            btn.disabled = false;
        });
    });
}

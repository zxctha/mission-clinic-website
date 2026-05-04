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

    // Booking Form Submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<span class="loader"></span> Processing...';
            btn.disabled = true;

            setTimeout(() => {
                const container = document.querySelector('.form-side');
                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                         <div style="width: 80px; height: 80px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
                            <i data-lucide="check-circle-2" size="48"></i>
                         </div>
                         <h2 style="font-size: 2rem; margin-bottom: 1rem;">Submission Successful!</h2>
                         <p style="color: #64748b; margin-bottom: 2rem;">Thank you for choosing Mission Lab. Our team will contact you shortly to confirm your slot.</p>
                         <a href="index.html" class="btn btn-primary">Back to Home</a>
                    </div>
                `;
                lucide.createIcons();
            }, 1500);
        });
    }

    // Lucide Icons Initialization
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Contact Form Submission (Email)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        const subject = `Inquiry from ${name}`;
        const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

        window.location.href = `mailto:tubillo.marlon@gmail.com?subject=${subject}&body=${body}`;
    });
}

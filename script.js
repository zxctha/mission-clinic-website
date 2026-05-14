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

if (galleryImages.length &&
    imageLightbox &&
    lightboxImage &&
    lightboxClose) {

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

}

// SERVICES DATABASE

const services = {

laboratory: [

    // BLOOD CHEM PACKAGES
    "BCP 1 — ₱1,250",
    "BCP 2 — ₱1,400",
    "BCP 3 — ₱1,550",
    "BCP 4 — ₱1,750",

    // PREGNANT PACKAGES
    "PP1 — ₱650",
    "PP2 — ₱1,250",
    "PP3 — ₱2,450",

    // PREGNANT PACKAGES
    "EP 1 — ₱3,350",
    "EP 2 — ₱3,850",
    "EP 3 — ₱4,850",
    "EP 4 — ₱5,050",


    // INDIVIDUAL TESTS
    "CBC / Platelet Count",
    "Blood Typing",
    "ESR",
    "Urinalysis",
    "Fecalysis",
    "Pregnancy Test Serum",
    "Pregnancy Test Urine",

    "Fasting Blood Sugar (FBS)",
    "Creatinine",
    "Uric Acid",
    "SGPT (ALT)",
    "SGOT (AST)",
    "Lipid Profile",
    "HBA1C",

    "HIV Screening",
    "HBsAG",
    "VDRL / Syphilis",
    "Dengue Duo",

    "12-Lead ECG w/ Reading",
    "Drug Testing"

],

    ultrasound: [
        "Whole Abdomen",
        "Upper / Lower Abdomen",
        "Pelvic / TAS",
        "Biophysical Scoring (BPS)"
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

const serviceDetails = {

"BCP 1 — ₱1,250": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>Creatinine</li>
    </ul>

</div>

<div class="detail-section warning">
    <h4>FREE URINALYSIS</h4>
    <h4>⚠ Preparation Reminder</h4>

    <p>
        Do not eat or drink anything prior to blood collection.
    </p>

    <br>

    <strong>
        Strictly Morning Blood Extraction ❗❗
    </strong>

    <ul>
        <li>Last meal: 8:00 PM</li>
        <li>Time of extraction: 6:00 AM</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Available within 1-2 hours.
    </p>

</div>
`,

"BCP 2 — ₱1,400": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>Creatinine</li>
        <li>CBC W/ PLT</li>
    </ul>

</div>

<div class="detail-section warning">
    <h4>FREE URINALYSIS</h4>
    <h4>⚠ Preparation Reminder</h4>

    <p>
        Do not eat or drink anything prior to blood collection.
    </p>

    <br>

    <strong>
        Strictly Morning Blood Extraction ❗❗
    </strong>

    <ul>
        <li>Last meal: 8:00 PM</li>
        <li>Time of extraction: 6:00 AM</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Available within 1-2 hours.
    </p>

</div>
`,




    

"BCP 3 — ₱1,550": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>Creatinine</li>
        <li>BUN</li>
        <li>SGOT</li>
    </ul>

</div>

<div class="detail-section warning">
    <h4>FREE URINALYSIS</h4>
    <h4>⚠ Preparation Reminder</h4>

    <p>
        Do not eat or drink anything prior to blood collection.
    </p>

    <br>

    <strong>
        Strictly Morning Blood Extraction ❗❗
    </strong>

    <ul>
        <li>Last meal: 8:00 PM</li>
        <li>Time of extraction: 6:00 AM</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Available within 1-2 hours.
    </p>

</div>
`,




    

"BCP 4 — ₱1,750": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>Creatinine</li>
        <li>BUN</li>
        <li>SGOT</li>
        <li>CBC W/ PLT</li>
    </ul>

</div>

<div class="detail-section warning">
    <h4>FREE URINALYSIS</h4>
    <h4>⚠ Preparation Reminder</h4>

    <p>
        Do not eat or drink anything prior to blood collection.
    </p>

    <br>

    <strong>
        Strictly Morning Blood Extraction ❗❗
    </strong>

    <ul>
        <li>Last meal: 8:00 PM</li>
        <li>Time of extraction: 6:00 AM</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Available within 1-2 hours.
    </p>

</div>
`,
    

"PP1 — ₱650": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>CBC W/ PLT</li>
        <li>Urinalysis</li>
        <li>Blood Typing</li>
        <li>RPR/VDRL</li>
        <li>HBSAG</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>🤰 Preparation Reminder</h4>
    
        <ul>
            <li>Drink plenty of water before urine collection.</li>
            <li>Avoid salty and sugary foods before the test.</li>
            <li>Please arrive 15 minutes before your appointment.</li>
            <li>Bring previous laboratory results if available.</li>
        </ul>
    
    </div>
    

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Available within 1-2 hours.
    </p>

</div>
`,
    


"PP2 — ₱1,250": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>CBC W/ PLT</li>
        <li>Urinalysis</li>
        <li>Blood Typing</li>
        <li>RPR/VDRL</li>
        <li>HBSAG</li>
        <li>HIV</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>🤰 Preparation Reminder</h4>
    
    <ul>
        <li>No fasting required unless advised by your doctor.</li>
        <li>Drink water before urine collection.</li>
        <li>Please bring a valid ID for laboratory documentation.</li>
        <li>Arrive 15 minutes before your appointment.</li>
    </ul>
    
    </div>
    
    <div class="detail-section result">
    
        <h4>🕒 Estimated Result</h4>
    
        <p>
            Available within 1-2 hours.
        </p>

</div>

`,


    
"PP3 — ₱2,450": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>CBC W/ PLT</li>
        <li>Urinalysis</li>
        <li>Blood Typing</li>
        <li>RPR/VDRL</li>
        <li>HBSAG</li>
        <li>HIV</li>
        <li>Pregnant Ultrasound</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>🤰 Preparation Reminder</h4>
    
    <ul>
        <li>No fasting required unless advised by your doctor.</li>
        <li>Drink plenty of water before ultrasound.</li>
        <li>Do not urinate before the procedure unless instructed.</li>
        <li>Please bring a valid ID for laboratory documentation.</li>
        <li>Arrive 15 minutes before your appointment.</li>
    </ul>
    
    </div>
    
    <div class="detail-section result">
    
        <h4>🕒 Estimated Result</h4>
    
        <p>
            Available within 1-2 hours.
        </p>

</div>

`,



"EP 1 — ₱3,350": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>SGOT</li>
        <li>Creatinine</li>
        <li>BUN</li>
        <li>CBC with Platelet</li>
        <li>HBA1C</li>
        <li>12-Lead ECG</li>
        <li>Doctor's Consultation</li>
        <li>FREE Urinalysis</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>⚠ Preparation Reminder</h4>

    <ul>
        <li>Do not eat or drink anything prior to blood extraction.</li>
        <li>Strictly morning blood extraction.</li>
        <li>Water is allowed during fasting.</li>
        <li>Avoid coffee and soft drinks.</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Results available within the day.
    </p>

</div>
`,

"EP 2 — ₱3,850": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>SGOT</li>
        <li>Creatinine</li>
        <li>BUN</li>
        <li>CBC with Platelet</li>
        <li>HBA1C</li>
        <li>Sodium</li>
        <li>Potassium</li>
        <li>Calcium</li>
        <li>12-Lead ECG</li>
        <li>Doctor's Consultation</li>
        <li>FREE Urinalysis</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>⚠ Preparation Reminder</h4>

    <ul>
        <li>Do not eat or drink anything prior to blood extraction.</li>
        <li>Strictly morning blood extraction.</li>
        <li>Water is allowed during fasting.</li>
        <li>Avoid coffee and soft drinks.</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Results available within the day.
    </p>

</div>
`,



"EP 3 — ₱4,850": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>Cholesterol</li>
        <li>Triglycerides</li>
        <li>HDL/LDL</li>
        <li>SGPT</li>
        <li>SGOT</li>
        <li>CBC with Platelet</li>
        <li>Creatinine</li>
        <li>HBA1C</li>
        <li>12-Lead ECG</li>
        <li>Whole Abdomen</li>
        <li>Ultrasound</li>
        <li>Doctor's Consultation</li>
        <li>FREE Urinalysis</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>⚠ Preparation Reminder</h4>

    <ul>
        <li>Do not eat or drink anything prior to blood extraction.</li>
        <li>Strictly morning blood extraction.</li>
        <li>Water is allowed during fasting.</li>
        <li>Avoid coffee and soft drinks.</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Results available within the day.
    </p>

</div>
`,


 "EP 4 — ₱5,050": `

<div class="detail-section">

    <h4>📦 Package Includes</h4>

    <ul>
        <li>FBS</li>
        <li>Uric Acid</li>
        <li>Lipid Profile</li>
        <li>SGPT</li>
        <li>SGOT</li>
        <li>Creatinine</li>
        <li>BUN</li>
        <li>CBC with Platelet</li>
        <li>Sodium</li>
        <li>Potassium</li>
        <li>Calcium</li>
        <li>HBA1C</li>
        <li>12-Lead ECG</li>
        <li>Whole Abdomen</li>
        <li>Ultrasound</li>
        <li>Doctor's Consultation</li>
        <li>FREE Urinalysis</li>
    </ul>

</div>

<div class="detail-section warning">

    <h4>⚠ Preparation Reminder</h4>

    <ul>
        <li>Do not eat or drink anything prior to blood extraction.</li>
        <li>Strictly morning blood extraction.</li>
        <li>Water is allowed during fasting.</li>
        <li>Avoid coffee and soft drinks.</li>
    </ul>

</div>

<div class="detail-section result">

    <h4>🕒 Estimated Result</h4>

    <p>
        Results available within the day.
    </p>

</div>
`,   


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

const detailsModal =
document.getElementById("detailsModal");

const detailsModalBody =
document.getElementById("detailsModalBody");

const closeDetailsModal =
document.getElementById("closeDetailsModal");

if (
    packageSelect &&
    detailsModal &&
    detailsModalBody
) {

    packageSelect.addEventListener("change", () => {

        const selectedService =
        packageSelect.value;

        if (serviceDetails[selectedService]) {

            detailsModal.classList.add("active");

            detailsModalBody.innerHTML =
            serviceDetails[selectedService];

        }

    });

}

if (closeDetailsModal && detailsModal) {

    closeDetailsModal.addEventListener("click", () => {

        detailsModal.classList.remove("active");

    });

    detailsModal.addEventListener("click", (e) => {

        if (e.target === detailsModal) {

            detailsModal.classList.remove("active");

        }

    });

}

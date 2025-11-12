// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

if (mobileMenuToggle && mobileNav && closeMenu && overlay) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.setAttribute('aria-expanded', 'true');
    });
    
    closeMenu.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });
    
    overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });
}

// Mobile Dropdown Toggle
const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');

mobileDropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        dropdownContent.classList.toggle('active');
        this.setAttribute('aria-expanded', !isExpanded);
        
        const icon = this.querySelector('i');
        if (dropdownContent.classList.contains('active')) {
            icon?.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            icon?.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
});

// Desktop Dropdown Toggle
const desktopDropdown = document.querySelector('.dropdown');
const desktopDropdownLink = document.querySelector('.dropdown > a');

if (desktopDropdown) {
    desktopDropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
        if (desktopDropdownLink) desktopDropdownLink.setAttribute('aria-expanded', 'true');
    });
    
    desktopDropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
        if (desktopDropdownLink) desktopDropdownLink.setAttribute('aria-expanded', 'false');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if (mobileNav && overlay) {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
    }
});

// Update copyright year
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Form submission handlers
const formHandlers = {
    'enrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        const course = document.getElementById('course')?.value;
        alert(`Thank you ${fullname}! Your enrollment form for ${course} has been submitted successfully. We will contact you at ${phone} within few hours to schedule your free trial class.`);
        document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'qaidaEnrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        alert(`Thank you ${fullname}! Your enrollment form for Shia Basic Qaida Course has been submitted successfully. We will contact you at ${phone} within few hours to schedule your free trial class.`);
        document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'quranReadingEnrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        const level = document.getElementById('studentLevel')?.value;
        alert(`Thank you ${fullname}! Your enrollment for our Quran Reading with Tajweed course has been submitted successfully. Our Tajweed specialist will contact you at ${phone} within few hours to schedule your free trial class and assess your current Quran reading level.`);
        document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'translationEnrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        const language = document.getElementById('preferredLanguage')?.value;
        alert(`Thank you ${fullname}! Your enrollment for our Quran with Translation course has been submitted successfully. Our Quran translation specialist will contact you at ${phone} within few hours to schedule your free assessment session and discuss your ${language} Quran translation preferences.`);
        document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'hifzEnrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        alert(`Thank you ${fullname}! Your enrollment form for Quran Memorization Course has been submitted successfully. We will contact you at ${phone} within few hours to schedule your free assessment session.`);
        document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'tafseerEnrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        alert(`Thank you ${fullname}! Your enrollment form for Quran Tafseer Course has been submitted successfully. We will contact you at ${phone} within few hours to schedule your free assessment session.`);
        document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'islamicStudiesEnrollmentForm': (form) => {
        alert('Thank you for your enrollment in our Islamic Studies & Nehj ul Balagha course! We will contact you shortly to confirm your registration and schedule your free trial class.');
    },
    
    'duasZiyaratEnrollmentForm': (form) => {
        const fullname = document.getElementById('fullname')?.value;
        const phone = document.getElementById('phone')?.value;
        alert(`Thank you ${fullname}! Your enrollment form for Duas & Ziyarat Course has been submitted successfully. We will contact you at ${phone} within few hours to schedule your free assessment session.`);
        document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
    },
    
    'contactForm': (form) => {
        const name = document.getElementById('name')?.value;
        const phone = document.getElementById('phone')?.value;
        const subject = document.getElementById('subject')?.value;
        const country = document.getElementById('country')?.value;
        const message = document.getElementById('message')?.value;

        if (!name || !phone) {
            alert("Please fill in all required fields (Name and WhatsApp Number).");
            return;
        }

        alert(`Thank you ${name}! Your message has been sent successfully. We will contact you at ${phone} within few hours.`);
    }
};

// Attach form handlers
Object.keys(formHandlers).forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formHandlers[formId](this);
            this.reset();
        });
    }
});

// Pricing Tabs
const pricingTabs = document.querySelectorAll('.pricing-tab');
const monthlyPlans = document.getElementById('monthly-plans');
const quarterlyPlans = document.getElementById('quarterly-plans');
const yearlyPlans = document.getElementById('yearly-plans');

if (pricingTabs.length > 0) {
    pricingTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            pricingTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            [monthlyPlans, quarterlyPlans, yearlyPlans].forEach(plan => {
                if (plan) plan.style.display = 'none';
            });
            
            const planType = this.getAttribute('data-plan');
            const targetPlan = planType === 'monthly' ? monthlyPlans : 
                             planType === 'quarterly' ? quarterlyPlans : yearlyPlans;
            
            if (targetPlan) targetPlan.style.display = 'grid';
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question?.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
}

// FAQ Category Filtering
const categoryBtns = document.querySelectorAll('.category-btn');
const faqCategories = document.querySelectorAll('.faq-category');

if (categoryBtns.length > 0) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            faqCategories.forEach(cat => {
                cat.style.display = (category === 'all' || cat.getAttribute('data-category') === category) ? 'block' : 'none';
            });
        });
    });
}

// FAQ Search Functionality
const searchBox = document.getElementById('faqSearch');
const searchBtn = document.getElementById('searchButton');

if (searchBox && searchBtn) {
    function performSearch() {
        const searchTerm = searchBox.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            faqItems.forEach(item => item.style.display = 'block');
            faqCategories.forEach(cat => cat.style.display = 'block');
            
            const existingNoResults = document.querySelector('.no-results');
            if (existingNoResults) existingNoResults.remove();
            return;
        }
        
        faqCategories.forEach(cat => cat.style.display = 'none');
        
        let hasResults = false;
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question span')?.textContent.toLowerCase() || '';
            const answer = item.querySelector('.faq-answer')?.textContent.toLowerCase() || '';
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                item.closest('.faq-category').style.display = 'block';
                item.classList.add('active');
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        if (!hasResults) {
            const existingNoResults = document.querySelector('.no-results');
            if (existingNoResults) existingNoResults.remove();
            
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `<p>No FAQs found for "${searchTerm}". Please try a different search term.</p>`;
            document.querySelector('.faq-container')?.appendChild(noResults);
        } else {
            const existingNoResults = document.querySelector('.no-results');
            if (existingNoResults) existingNoResults.remove();
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchBox.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
}

// Translation Tabs
const translationTabs = document.querySelectorAll('.translation-tab');

if (translationTabs.length > 0) {
    translationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            translationTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.translation-content').forEach(content => {
                content.style.display = 'none';
            });
            
            const targetTab = document.getElementById(`${tabId}-tab`);
            if (targetTab) targetTab.style.display = 'block';
        });
    });
}

// Image error handling
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
    });
});

// Fix for mobile menu closing when clicking on links inside mobile dropdown
document.querySelectorAll('.mobile-dropdown-content a').forEach(link => {
    link.addEventListener('click', function() {
        if (mobileNav && overlay) {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// WhatsApp message fix - corrected URL encoding
const whatsappBtn = document.querySelector('.whatsapp-float');
// The URL is already properly encoded in the href attribute
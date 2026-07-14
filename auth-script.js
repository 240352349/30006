// Toggle Between Forms
function initFormToggle() {
    const toggleLinks = document.querySelectorAll('.toggle-link');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetForm = link.getAttribute('data-toggle');

            if (targetForm === 'signup') {
                loginForm.classList.remove('active');
                signupForm.classList.add('active');
                window.location.hash = 'signup';
            } else if (targetForm === 'login') {
                signupForm.classList.remove('active');
                loginForm.classList.add('active');
                window.location.hash = 'login';
            }
        });
    });

    // Check URL hash on page load to determine which form to show
    const hash = window.location.hash;
    if (hash === '#signup') {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    }
}

// Login Form
function initLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userLang = localStorage.getItem('language') || 'zh';
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        if (email === '' || password === '') {
            alert(window.translations[userLang]['fill-all-fields']);
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert(window.translations[userLang]['invalid-email']);
            return;
        }

        // Simulate successful login
        alert(window.translations[userLang]['login-success']);
        loginForm.reset();
    });
}

// Sign Up Form
function initSignupForm() {
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userLang = localStorage.getItem('language') || 'zh';
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert(window.translations[userLang]['fill-all-fields']);
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert(window.translations[userLang]['invalid-email']);
            return;
        }

        if (password.length < 6) {
            alert(window.translations[userLang]['password-length']);
            return;
        }

        if (password !== confirmPassword) {
            alert(window.translations[userLang]['password-mismatch']);
            return;
        }

        // Simulate successful sign-up
        alert(window.translations[userLang]['signup-success']);
        signupForm.reset();
    });
}

// Update form texts based on language
function updateFormLanguage() {
    const userLang = localStorage.getItem('language') || 'zh';
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (window.translations[userLang][key]) {
            element.textContent = window.translations[userLang][key];
        }
    });

    // Update placeholder texts dynamically
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const placeholderKey = input.getAttribute('id') + '-placeholder';
        if (window.translations[userLang][placeholderKey]) {
            input.placeholder = window.translations[userLang][placeholderKey];
        }
    });
}

// Initialize Forms and Toggle
function init() {
    initFormToggle();
    initLoginForm();
    initSignupForm();
    updateFormLanguage();

    // Listen for language change events
    document.addEventListener('languageChanged', () => {
        updateFormLanguage();
    });
}

// Run the initialization
init();
document.addEventListener('DOMContentLoaded', () => {
    // Language data
    window.translations = {
        zh: {
            title: "太妍粉絲專頁",
            logo: "太妍粉絲專頁",
            home: "首頁",
            about: "關於太妍",
            music: "音樂作品",
            contact: "聯繫我們",
            greeting: "嗨，我是太妍",
            singer: "我是一位歌手",
            intro: "這裡關於太妍的粉絲專頁，歡迎探索她的音樂和活動。",
            "view-works": "查看我的作品",
            "name-label": "姓名：",
            name: "金太耎 (Kim Tae-yeon)",
            "artlistName-label": "藝名：",
            "artlistName": "太妍、TAEYEON",
            "nationality-label": "國籍：",
            nationality: "大韓民國",
            "birthday-label": "生日：",
            birthday: "1989年3月9日",
            "zodiac-label": "星座：",
            zodiac: "雙魚座",
            "occupation-label": "職業：",
            occupation: "明星、歌手、模特、主持人、YouTuber、舞者",
            "debut-label": "出道：",
            debut: "團體：2007年8月5日(少女時代); 個人：2015年10月7日",
            "works-label": "代表作：",
            works: "《To.X》、《INVU》、《Fine》",
            milestones: "職業生涯里程碑",
            "debut-snsd": "少女時代出道",
            "debut-snsd-desc": "太妍作為少女時代的隊長正式出道，首張單曲《Into the New World》發布，奠定團體基礎。",
            "solo-debut": "個人出道",
            "solo-debut-desc": "發布首張個人迷你專輯《I》，主打歌《I》在Gaon榜表現優異，標誌獨立藝人轉型成功。",
            "single-rain": "單曲《Rain》發布",
            "single-rain-desc": "作為SM Station計劃的一部分，獲得Gaon數字榜冠軍，展現音樂多樣性。",
            "album-why": "迷你專輯《Why》發布",
            "album-why-desc": "主打歌《Why》廣受好評，專輯在Gaon榜奪冠。",
            "album-my-voice": "正規專輯《My Voice》發布",
            "album-my-voice-desc": "包含《11:11》、《Fine》、《Make Me Love You》，數字榜表現優異。",
            "album-invu": "發布EP《INVU》",
            "album-invu-desc": "以主打歌《INVU》獲得成功，進一步鞏固其獨立藝人地位。",
            "album-letter-to-myself": "發布EP《Letter to Myself》",
            "album-letter-to-myself-desc": "包含主打歌《Letter to Myself》，展現自我反思和成長的主題。",
            profile: "簡介",
            "contact-heading": "聯絡我們",
            "contact-message": "有任何問題或建議，歡迎通過以下方式聯繫我：",
            "email-label": "📧電子郵件",
            "tracklist-heading": "曲目列表",
            "error-heading": "錯誤",
            "error-description": "無法找到該專輯的詳情，請返回音樂頁面重新選擇。",
            "listen-now": "立即收聽",
            "login-heading": "登入太妍會員",
            "login-description": "登入以探索更多太妍的音樂和活動。",
            "signup-heading": "註冊成為太妍會員",
            "signup-description": "創建新帳號以加入太妍的粉絲社群。",
            "email-label": "電子郵件",
            "password-label": "密碼",
            "confirm-password-label": "確認密碼",
            "name-label": "姓名",
            "login-btn": "登入",
            "signup-btn": "註冊",
            "no-account": "還沒有帳號？",
            "have-account": "已經有帳號？",
            "signup-link": "在此註冊",
            "login-link": "在此登入",
            "fill-all-fields": "請填寫所有欄位。",
            "invalid-email": "請輸入有效的電子郵件地址。",
            "password-length": "密碼必須至少有6個字符。",
            "password-mismatch": "密碼不匹配。",
            "login-success": "登入成功！歡迎回來。",
            "signup-success": "註冊成功！歡迎加入太妍粉絲專頁。",
            "login-email-placeholder": "輸入您的電子郵件",
            "login-password-placeholder": "輸入您的密碼",
            "signup-name-placeholder": "輸入您的姓名",
            "signup-email-placeholder": "輸入您的電子郵件",
            "signup-password-placeholder": "創建密碼",
            "signup-confirm-password-placeholder": "確認您的密碼"
        },
        en: {
            title: "Taeyeon Fan Page",
            logo: "Taeyeon Fan Page",
            home: "Home",
            about: "About Taeyeon",
            music: "Music",
            contact: "Contact",
            greeting: "Hi, I'm Taeyeon",
            singer: "I'm a Singer",
            intro: "This is a fan page for Taeyeon, welcome to explore her music and events.",
            "view-works": "View My Works",
            "name-label": "Name:",
            name: "Kim Tae-yeon",
            "artlistName-label": "Artlist Name:",
            "artlistName": "TAEYEON",
            "nationality-label": "Nationality:",
            nationality: "South Korea",
            "birthday-label": "Birthday:",
            birthday: "March 9, 1989",
            "zodiac-label": "Zodiac:",
            zodiac: "Pisces",
            "occupation-label": "Occupation:",
            occupation: "Celebrity, Singer, Model, Host, YouTuber, Dancer",
            "debut-label": "Debut:",
            debut: "Group: August 5, 2007 (Girls' Generation); Solo: October 7, 2015",
            "works-label": "Representative Works:",
            works: "《To.X》, 《INVU》, 《Fine》",
            milestones: "Career Milestones",
            "debut-snsd": "Girls' Generation Debut",
            "debut-snsd-desc": "Taeyeon debuted as the leader of Girls' Generation with the single 《Into the New World》, laying the foundation for the group.",
            "solo-debut": "Solo Debut",
            "solo-debut-desc": "Released her first solo mini-album 《I》, with the title track 《I》 performing well on the Gaon Chart, marking a successful transition to a solo artist.",
            "single-rain": "Single 《Rain》 Released",
            "single-rain-desc": "As part of SM Station, it topped the Gaon Digital Chart, showcasing musical diversity.",
            "album-why": "Mini-Album 《Why》 Released",
            "album-why-desc": "The title track 《Why》 received widespread acclaim, and the album topped the Gaon Chart.",
            "album-my-voice": "Full-Length Album 《My Voice》 Released",
            "album-my-voice-desc": "Includes 《11:11》, 《Fine》, and 《Make Me Love You》, performing strongly on digital charts.",
            "album-invu": "Released EP 《INVU》",
            "album-invu-desc": "Achieved success with the title track 《INVU》, further solidifying her status as a solo artist.",
            "album-letter-to-myself": "Released EP 《Letter to Myself》",
            "album-letter-to-myself-desc": "Includes the title track 《Letter to Myself》, showcasing themes of self-reflection and growth.",
            profile: "Profile",
            "contact-heading": "Contact Us",
            "contact-message": "If you have any questions or suggestions, feel free to contact me via the following methods:",
            "email-label": "📧Email",
            "tracklist-heading": "Tracklist",
            "error-heading": "Error",
            "error-description": "Cannot find the details of this album, please return to the music page to select again.",
            "listen-now": "Listen Now",
            "login-heading": "Login to Taeyeon Membership",
            "login-description": "Log in to explore more of Taeyeon's music and events.",
            "signup-heading": "Sign Up as a Taeyeon Member",
            "signup-description": "Create a new account to join Taeyeon's fan community.",
            "email-label": "Email",
            "password-label": "Password",
            "confirm-password-label": "Confirm Password",
            "name-label": "Name",
            "login-btn": "Login",
            "signup-btn": "Sign Up",
            "no-account": "Don't have an account?",
            "have-account": "Already have an account?",
            "signup-link": "Sign up here",
            "login-link": "Log in here",
            "fill-all-fields": "Please fill in all fields.",
            "invalid-email": "Please enter a valid email address.",
            "password-length": "Password must be at least 6 characters long.",
            "password-mismatch": "Passwords do not match.",
            "login-success": "Login successful! Welcome back.",
            "signup-success": "Sign up successful! Welcome to Taeyeon Fan Page.",
            "login-email-placeholder": "Enter your email",
            "login-password-placeholder": "Enter your password",
            "signup-name-placeholder": "Enter your name",
            "signup-email-placeholder": "Enter your email",
            "signup-password-placeholder": "Create a password",
            "signup-confirm-password-placeholder": "Confirm your password"
        }
    };

    // Set the default language to Traditional Chinese
    let currentLang = localStorage.getItem('language') || 'zh';

    // Shared Features: Burger menu switching
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');

    if (hamburger && navLinks && closeMenu) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger clicked');
            navLinks.classList.toggle('active');
        });
        closeMenu.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Close menu clicked');
            navLinks.classList.remove('active');
        });
    }

    // Common Features: Language selection
    const globeIcon = document.querySelector('.globe-icon');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    // Functions that update the language
    const updateLanguage = () => {
        if (!window.translations) {
            console.error('Translations not defined');
            return;
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (window.translations[currentLang][key]) {
                element.textContent = window.translations[currentLang][key];
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${currentLang}`);
            }
        });

        // Make sure the .logo element exists
        const logoElement = document.querySelector('.logo');
        if (logoElement) {
            logoElement.textContent = window.translations[currentLang].logo;
        } else {
            console.warn('Logo element not found');
        }

        // Make sure the #page-title element exists
        const pageTitleElement = document.querySelector('#page-title');
        if (pageTitleElement) {
            pageTitleElement.textContent = window.translations[currentLang].title;
        } else {
            console.warn('Page title element not found');
        }

        // Update year-label in timeline-nav
        document.querySelectorAll('.nav-dot').forEach(dot => {
            const year = dot.getAttribute('data-year');
            const yearLabel = dot.querySelector('.year-label');
            if (year === 'profile' && window.translations[currentLang].profile) {
                yearLabel.textContent = window.translations[currentLang].profile;
            } else {
                yearLabel.textContent = yearLabel.textContent; 
            }
        });
    };

    // The default language is applied for initial loading
    updateLanguage();

    if (globeIcon && languageDropdown) {
        globeIcon.addEventListener('click', () => {
            languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'flex' : 'none';
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                currentLang = option.getAttribute('data-lang');
                localStorage.setItem('language', currentLang);
                updateLanguage();
                languageDropdown.style.display = 'none';
                document.dispatchEvent(new Event('languageChanged'));
            });
        });

        document.addEventListener('click', (e) => {
            if (!globeIcon.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.style.display = 'none';
            }
        });
    }

    console.log("Common scripts loaded successfully!");
});
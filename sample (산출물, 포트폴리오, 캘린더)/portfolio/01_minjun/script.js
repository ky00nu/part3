// Language Toggle Logic
const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); // 기본 동작 방지
        const isEn = document.body.classList.contains('lang-en');
        console.log('Language toggle clicked, current isEn:', isEn);
        
        if (isEn) {
            document.body.classList.remove('lang-en');
            document.body.classList.add('lang-ko');
            langToggleBtn.innerText = 'KO';
            document.documentElement.lang = 'ko';
        } else {
            document.body.classList.remove('lang-ko');
            document.body.classList.add('lang-en');
            langToggleBtn.innerText = 'EN';
            document.documentElement.lang = 'en';
        }
    });
}

// Mouse glow effect
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // 모바일 등 터치 기기에서는 이벤트를 최소화하거나 제거할 수 있습니다.
    if(window.innerWidth > 768) {
        requestAnimationFrame(() => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
    }
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll fade-up animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 한번 보여지면 계속 보여지게 하려면 아래 줄 활성화
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// Initial trigger for hero section elements just in case
setTimeout(() => {
    const heroElements = document.querySelectorAll('#hero .fade-up');
    heroElements.forEach(el => el.classList.add('visible'));
}, 100);


// Copy Email to Clipboard
const copyBtn = document.getElementById('copyEmailBtn');
const tooltip = copyBtn.querySelector('.tooltip');

copyBtn.addEventListener('click', () => {
    const email = "minjun.design@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
        tooltip.textContent = "Copied!";
        copyBtn.style.background = "var(--text-primary)";
        copyBtn.style.color = "var(--bg-color)";
        
        setTimeout(() => {
            tooltip.textContent = "Click to copy";
            copyBtn.style.background = "transparent";
            copyBtn.style.color = "var(--text-primary)";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        tooltip.textContent = "Failed to copy";
    });
});

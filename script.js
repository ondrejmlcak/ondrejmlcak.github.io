// ---------------------------
// Přepínání tématu
// ---------------------------
const themeDesktop = document.getElementById('themeSwitchDesktop');
const themeMobile = document.getElementById('themeSwitchMobile');
const bodyEl = document.body;
const logo = document.getElementById('logo');
const favicon = document.getElementById('favicon');

function toggleTheme(icon) {
    if (bodyEl.classList.contains('light-mode')) {
        bodyEl.classList.replace('light-mode', 'dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        logo.src = "logo-dark.webp";
        favicon.href = "logo-dark.webp"; // tmavá favicona
    } else {
        bodyEl.classList.replace('dark-mode', 'light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        logo.src = "logo-light.webp";
        favicon.href = "logo-light.webp"; // světlá favicona
    }

    updateIcons();
}

themeDesktop.addEventListener('click', () => {
    toggleTheme(themeDesktop.querySelector('i'));
});
themeMobile.addEventListener('click', () => {
    toggleTheme(themeMobile.querySelector('i'));
});

// ---------------------------
// Přepínání ikon podle tématu
// ---------------------------
function updateIcons() {
    const isLight = bodyEl.classList.contains('light-mode');

    // Kontakt ikon + text
    document.querySelectorAll('.contact-icon i').forEach(icon => {
        icon.style.color = isLight ? '#212529' : '#f8f9fa';
    });
    document.querySelectorAll('.contact-name').forEach(name => {
        name.style.color = isLight ? '#212529' : '#f8f9fa';
    });

    // Schopnosti ikon
    document.querySelectorAll('.skill-icon i').forEach(icon => {
        icon.style.color = isLight ? '#212529' : '#f8f9fa';
    });
}

// Inicializace ikon, loga a favicony při načtení stránky
window.addEventListener('DOMContentLoaded', () => {
    updateIcons();
    if (bodyEl.classList.contains('dark-mode')) {
        logo.src = "logo-dark.webp";
        favicon.href = "logo-dark.webp";
    } else {
        logo.src = "logo-light.webp";
        favicon.href = "logo-light.webp";
    }
});

// ---------------------------
// Aktivní link při scrollu
// ---------------------------
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // při načtení

// ---------------------------
// Animovaný kurzor
// ---------------------------
const cursor = document.getElementById('cursor-dot');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-text'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-text'));
});

document.querySelectorAll('.btn, .modern-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    btn.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// Přidání kruhu kolem tečky při hoveru na menu a přepínač tématu
document.querySelectorAll('.nav-link, .theme-switch').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-ring'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-ring'));
});

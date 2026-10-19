document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight current active navigation tab based on page URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Real-time EST Clock (Estravian Standard Time)
    function updateClock() {
        const clockElement = document.getElementById('est-clock');
        if (!clockElement) return;

        const options = {
            timeZone: 'UTC',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const now = new Date();
        clockElement.textContent = `EST (UTC): ${now.toLocaleTimeString('en-US', options)}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});

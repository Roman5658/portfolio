function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function toggleSkill(element) {
    element.parentElement.classList.toggle('active');
}

function toggleProject(element) {
    element.parentElement.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = this.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        const header = document.querySelector('header');

        if (!target || !header) return;

        const headerHeight = header.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPos - headerHeight,
            behavior: 'smooth'
        });
    });
});
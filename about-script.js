document.addEventListener('DOMContentLoaded', () => {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.profile-section, .timeline-item');

    let isClickScrolling = false;
    let lastActiveYear = null;

    function scrollToSection(event, year) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        if (section) {
            try {
                isClickScrolling = true;

                navDots.forEach(dot => {
                    if (dot.getAttribute('data-year') === year) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                lastActiveYear = year;

                section.scrollIntoView({ behavior: 'smooth', block: 'start' });

                setTimeout(() => {
                    isClickScrolling = false;
                }, 1000);
            } catch (error) {
                console.error(`Error scrolling to section ${year}:`, error);
                isClickScrolling = false;
            }
        } else {
            console.error(`Section not found for year: ${year}`);
            isClickScrolling = false;
        }
    }

    navDots.forEach(dot => {
        const link = dot.querySelector('a');
        if (link) {
            link.addEventListener('click', (e) => {
                const year = dot.getAttribute('data-year');
                scrollToSection(e, year);
            });
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });

        if (isClickScrolling) {
            return;
        }

        let closestSection = null;
        let minDistance = Infinity;
        const viewportCenter = window.innerHeight / 2;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + (rect.height / 2);
            const distance = Math.abs(sectionCenter - viewportCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
            }
        });

        if (closestSection) {
            const year = closestSection.getAttribute('data-year');
            if (year !== lastActiveYear) {
                lastActiveYear = year;
                navDots.forEach(dot => {
                    if (dot.getAttribute('data-year') === year) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
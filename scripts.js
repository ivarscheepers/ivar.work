let isAnimating = false;

function toggleExpand(img) {
    if (isAnimating) return;

    isAnimating = true;

    img.classList.toggle('expanded');
    const textContainer = document.getElementById('textContainer');

    if (img.classList.contains('expanded')) {
        document.body.style.backgroundColor = "#ffffff";
        document.body.classList.add('gold-text');

        textContainer.classList.remove('fade-out');
        textContainer.classList.add('visible');
    } else {
        document.body.style.backgroundColor = "#141414";
        document.body.classList.remove('gold-text');

        textContainer.classList.remove('visible');
        textContainer.classList.add('fade-out');
    }

    setTimeout(() => {
        isAnimating = false; 
        if (!img.classList.contains('expanded')) {
            textContainer.classList.remove('fade-out');
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const ease = "power4.inOut";

    gsap.set(".block", { visibility: "hidden", scaleY: 0 });

    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");

            if (href && !href.startsWith("#") && href !== window.location.pathname) {
                animateTransition(href).then(() => {
                    window.location.href = href;
                });
            }
        });
    });

    revealTransition().then(() => {
        gsap.set(".block", { visibility: "hidden", scaleY: 0 });
    });

    function revealTransition() {
        return new Promise((resolve) => {
            gsap.set(".block", { visibility: "visible", scaleY: 1, opacity: 1 });
            gsap.to(".block", {
                scaleY: 0,
                opacity: 1,
                duration: 1.2,
                stagger: {
                    each: 0.1,
                    from: "start",
                },
                ease: ease,
                onComplete: resolve,
            });
        });
    }

    function animateTransition(href) {
        return new Promise((resolve) => {
            const animationDirection = href.endsWith("index.html") ? "end" : "start"; 
            gsap.set(".block", { visibility: "visible", scaleY: 0, opacity: 1 });
            gsap.to(".block", {
                scaleY: 1,
                opacity: 1,
                duration: 1.2,
                stagger: {
                    each: 0.1,
                    from: animationDirection, 
                },
                ease: ease,
                onComplete: resolve,
            });
        });
    }
});

document.addEventListener("scroll", () => {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;

    scrollIndicator.style.height = `${scrollPercentage}%`;
});

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const image = document.querySelector('.title-image');
    const width = Math.max(30, 50 - scrollY / 50); 
    image.style.width = `${width}vw`;
});

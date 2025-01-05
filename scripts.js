

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
    const width = Math.max(30, 70 - scrollY / 25); 
    image.style.width = `${width}vw`;
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden'); 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible'); 
                }, 100);
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.85
    });

    elements.forEach(element => observer.observe(element));
});















const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 1;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

const images = document.querySelectorAll("#image-track .image");

images.forEach(image => {
    image.addEventListener("click", () => {
        images.forEach(img => img.classList.add("fade-out"));

        setTimeout(() => {
            const link = image.getAttribute("data-link"); 
            if (link) {
                window.location.href = link; 
            }
        }, 600); 
    });
});

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);
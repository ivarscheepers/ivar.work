const menuBtn = document.querySelector('.menu-button');
const splitMenu = document.querySelector('.split-menu');
const menuItems = document.querySelectorAll('.menu-item');
const topbar = document.querySelector('.topbar');
const hoverImage = document.querySelector('.hover-image'); 

let isOpen = false;
let lastScrollTop = 0;

menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    splitMenu.classList.toggle('open', isOpen);
    menuBtn.textContent = isOpen ? 'CLOSE' : 'MENU';

    if (isOpen) {
        setTimeout(() => {
            menuItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
                item.style.opacity = 1;
            });
        }, 200);
    } else {
        menuItems.forEach(item => {
            item.style.transitionDelay = '0s';
            item.style.opacity = 1;
        });
    }
});

menuItems.forEach(item => {
    const imageSrc = item.dataset.image;

    item.addEventListener('mouseenter', () => {
        hoverImage.src = imageSrc;
        hoverImage.style.display = 'block';
        void hoverImage.offsetWidth; 
        hoverImage.style.opacity = 1;
        hoverImage.style.clipPath = 'inset(0 0 0 0)';
    });

    item.addEventListener('mouseleave', () => {
        hoverImage.style.opacity = 0;
        hoverImage.style.clipPath = 'inset(100% 0 0 0)';
        setTimeout(() => {
            if (hoverImage.style.opacity === '0') {
                hoverImage.style.display = 'none';
            }
        }, 500);
    });
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        topbar.style.transform = 'translateY(-100%)';
    } else {
        topbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function resizeMaussie() {
    const element = document.getElementById("maussie");
    const screenWidth = window.innerWidth;

    element.style.fontSize = '10px';

    let fontSize = 50;
    while (element.scrollWidth < screenWidth) {
        fontSize += 1;
        element.style.fontSize = fontSize + 'px';
    }

    element.style.fontSize = (fontSize - 1) + 'px';
}

window.addEventListener('load', resizeMaussie);
window.addEventListener('resize', resizeMaussie);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".maussie-logo", {
  scrollTrigger: {
    trigger: ".section-2",
    start: "top bottom",
   end: "bottom bottom",
    scrub: true,
  },
  scale: 0.4,
  y: "70vh",  
  opacity: 0.8, 
  ease: "none"
});

gsap.to(".maussie-subtext", {
  scrollTrigger: {
    trigger: ".section-2",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
  y: "65vh", 
  scale: 1,
  opacity: 0,
  ease: "none"
});

gsap.to(".foto-rechts", {
  scrollTrigger: {
    trigger: ".section-2",
    start: "top top",
    end: "top bottom",
    scrub: true,
  },
  x: 0,      
  opacity: 1,
  ease: "power1.out"
});

gsap.to(".foto-rechts", {
  scrollTrigger: {
    trigger: ".section-3",
    start: "top bottom",  
  end: "bottom top", 
    scrub: true,
  },
  scale: 1.2,   
  y: "140vh",       
  ease: "power1.out"
});

gsap.to(".tekst-onder-maussie", {
  scrollTrigger: {
    trigger: ".section-2",
    start: "top top",
    end: "top bottom",
    scrub: true
  },
  opacity: 0.8,
  y: 0,
  ease: "power2.out"
});

gsap.to(".tekst-onder-maussie", {
  scrollTrigger: {
    trigger: ".section-3",
    start: "top 95%", 
    end: "top 90%",    
    scrub: true,
  },
  opacity: 0,
  y: 20,
  ease: "power1.out"
});

gsap.to(".section3-text", {
  scrollTrigger: {
    trigger: "#section-3",
    start: "top 90%",  
    end: "center center", 
    scrub: true,         
  },
  opacity: 1,
  y: "20vh",
  ease: "power1.out"
});

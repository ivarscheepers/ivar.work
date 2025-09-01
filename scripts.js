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
  scale: 0.5,
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
  y: "70vh", 
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
  scale: 1,   
  y: "40vh",       
  ease: "power1.out"
});

gsap.to(".tekst-onder-maussie1", {
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

gsap.to(".tekst-onder-maussie1", {
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

gsap.to(".tekst-onder-maussie2", {
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

gsap.to(".tekst-onder-maussie2", {
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

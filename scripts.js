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
  scale: 1,   
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

gsap.to(".foto-rechts", {
  scrollTrigger: {
    trigger: ".section-3",
    start: "bottom bottom", 
    end: "bottom top",  
    scrub: true,
  },
  scale: 1.4,
  ease: "power2.out"
});


ScrollTrigger.create({
  trigger: "#section-3",
  start: "top center",
  end: "bottom center",
  toggleClass: { targets: ".section3-text", className: "underline" },
  once: false,
});


ScrollTrigger.create({
  trigger: "#section-3",
  start: "top top",
  end: "bottom bottom",
  onEnter: () => {
    document.querySelector(".section3-text").classList.add("underline");
  },
  onLeaveBack: () => {
    document.querySelector(".section3-text").classList.remove("underline");
  }
});

const commonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const data = [
  { title: "24.05.2025/13", photo: "assets/images/Vac1/0.jpg", description: commonDescription },
  { title: "24.05.2025/20", photo: "assets/images/Vac1/1.jpg", description: commonDescription },
  { title: "24.05.2025/28", photo: "assets/images/Vac1/2.jpg", description: commonDescription },
  { title: "24.05.2025/39", photo: "assets/images/Vac1/3.jpg", description: commonDescription },
  { title: "25.05.2025/1", photo: "assets/images/Vac1/4.jpg", description: commonDescription },
  { title: "25.05.2025/8", photo: "assets/images/Vac1/5.jpg", description: commonDescription },
  { title: "25.05.2025/20", photo: "assets/images/Vac1/6.jpg", description: commonDescription },
  { title: "25.05.2025/32", photo: "assets/images/Vac1/7.jpg", description: commonDescription },
  { title: "25.05.2025/35", photo: "assets/images/Vac1/8.jpg", description: commonDescription },
  { title: "25.05.2025/43", photo: "assets/images/Vac1/9.jpg", description: commonDescription },
  { title: "25.05.2025/53", photo: "assets/images/Vac1/10.jpg", description: commonDescription },
  { title: "25.05.2025/62", photo: "assets/images/Vac1/11.jpg", description: commonDescription },
  { title: "25.05.2025/88", photo: "assets/images/Vac1/12.jpg", description: commonDescription },
  { title: "25.05.2025/90", photo: "assets/images/Vac1/13.jpg", description: commonDescription },
  { title: "25.05.2025/99", photo: "assets/images/Vac1/14.jpg", description: commonDescription },
  { title: "25.05.2025/105", photo: "assets/images/Vac1/15.jpg", description: commonDescription },
  { title: "25.05.2025/122", photo: "assets/images/Vac1/16.jpg", description: commonDescription },
  { title: "25.05.2025/126", photo: "assets/images/Vac1/17.jpg", description: commonDescription },
  { title: "25.05.2025/139", photo: "assets/images/Vac1/18.jpg", description: commonDescription },
  { title: "25.05.2025/152", photo: "assets/images/Vac1/19.jpg", description: commonDescription },
  { title: "26.05.2025/169", photo: "assets/images/Vac1/20.jpg", description: commonDescription },
  { title: "26.05.2025/172", photo: "assets/images/Vac1/21.jpg", description: commonDescription },
  { title: "26.05.2025/173", photo: "assets/images/Vac1/22.jpg", description: commonDescription },
  { title: "26.05.2025/180", photo: "assets/images/Vac1/23.jpg", description: commonDescription },
  { title: "26.05.2025/187", photo: "assets/images/Vac1/24.jpg", description: commonDescription },
  { title: "26.05.2025/190", photo: "assets/images/Vac1/25.jpg", description: commonDescription },
  { title: "26.05.2025/191", photo: "assets/images/Vac1/26.jpg", description: commonDescription },
  { title: "26.05.2025/223", photo: "assets/images/Vac1/27.jpg", description: commonDescription },
  { title: "26.05.2025/227", photo: "assets/images/Vac1/28.jpg", description: commonDescription },
  { title: "27.05.2025/82", photo: "assets/images/Vac1/29.jpg", description: commonDescription },
  { title: "27.05.2025/91", photo: "assets/images/Vac1/30.jpg", description: commonDescription },
  { title: "27.05.2025/95", photo: "assets/images/Vac1/31.jpg", description: commonDescription },
  { title: "27.05.2025/126", photo: "assets/images/Vac1/32.jpg", description: commonDescription },
  { title: "27.05.2025/129", photo: "assets/images/Vac1/33.jpg", description: commonDescription },
  { title: "27.05.2025/139", photo: "assets/images/Vac1/34.jpg", description: commonDescription },
  { title: "27.05.2025/146", photo: "assets/images/Vac1/35.jpg", description: commonDescription },
  { title: "27.05.2025/151", photo: "assets/images/Vac1/36.jpg", description: commonDescription },
  { title: "27.05.2025/160", photo: "assets/images/Vac1/37.jpg", description: commonDescription },
  { title: "27.05.2025/170", photo: "assets/images/Vac1/38.jpg", description: commonDescription },
  { title: "27.05.2025/193", photo: "assets/images/Vac1/39.jpg", description: commonDescription },
  { title: "28.05.2025/224", photo: "assets/images/Vac1/40.jpg", description: commonDescription },
  { title: "28.05.2025/238", photo: "assets/images/Vac1/41.jpg", description: commonDescription },
  { title: "28.05.2025/248", photo: "assets/images/Vac1/42.jpg", description: commonDescription },
  { title: "28.05.2025/249", photo: "assets/images/Vac1/43.jpg", description: commonDescription },
  { title: "28.05.2025/271", photo: "assets/images/Vac1/44.jpg", description: commonDescription },
  { title: "28.05.2025/289", photo: "assets/images/Vac1/45.jpg", description: commonDescription },
  { title: "29.05.2025/7", photo: "assets/images/Vac1/46.jpg", description: commonDescription },
  { title: "29.05.2025/11", photo: "assets/images/Vac1/47.jpg", description: commonDescription },
  { title: "29.05.2025/14", photo: "assets/images/Vac1/48.jpg", description: commonDescription },
  { title: "29.05.2025/17", photo: "assets/images/Vac1/49.jpg", description: commonDescription },
  { title: "29.05.2025/21", photo: "assets/images/Vac1/50.jpg", description: commonDescription },
  { title: "29.05.2025/35", photo: "assets/images/Vac1/51.jpg", description: commonDescription },
  { title: "29.05.2025/59", photo: "assets/images/Vac1/52.jpg", description: commonDescription },
  { title: "29.05.2025/296", photo: "assets/images/Vac1/53.jpg", description: commonDescription },
  { title: "29.05.2025/299", photo: "assets/images/Vac1/54.jpg", description: commonDescription },
  { title: "30.05.2025/61", photo: "assets/images/Vac1/55.jpg", description: commonDescription },
  { title: "30.05.2025/73", photo: "assets/images/Vac1/56.jpg", description: commonDescription },
  { title: "30.05.2025/82", photo: "assets/images/Vac1/57.jpg", description: commonDescription },
  { title: "30.05.2025/89", photo: "assets/images/Vac1/58.jpg", description: commonDescription },
  { title: "30.05.2025/91", photo: "assets/images/Vac1/59.jpg", description: commonDescription },
  { title: "30.05.2025/97", photo: "assets/images/Vac1/60.jpg", description: commonDescription },
  { title: "30.05.2025/98", photo: "assets/images/Vac1/61.jpg", description: commonDescription },
  { title: "30.05.2025/101", photo: "assets/images/Vac1/62.jpg", description: commonDescription },
  { title: "30.05.2025/114", photo: "assets/images/Vac1/63.jpg", description: commonDescription },
  { title: "30.05.2025/116", photo: "assets/images/Vac1/64.jpg", description: commonDescription },
  { title: "30.05.2025/117", photo: "assets/images/Vac1/65.jpg", description: commonDescription },
  { title: "30.05.2025/120", photo: "assets/images/Vac1/66.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/67.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/68.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/69.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/70.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/71.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/72.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/73.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/74.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/75.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/76.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/77.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/78.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/79.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/80.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/81.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/82.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/83.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/84.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/85.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/86.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/87.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/88.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/89.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/90.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/91.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/92.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/93.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/94.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/95.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/96.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/97.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/98.jpg", description: commonDescription },
  { title: "30.05.2025/", photo: "assets/images/Vac1/99.jpg", description: commonDescription }
];

const thumbnailList = document.querySelector(".thumbnail-list");
const mainPhoto = document.getElementById("main-photo");
const titleText = document.getElementById("title-text");
const subtitleText = document.getElementById("subtitle-text");

let currentIndex = 0;

function createThumbnails() {
  thumbnailList.innerHTML = "";

  data.forEach((item, index) => {
    const img = document.createElement("img");
    img.src = item.photo;
    img.alt = item.title;
    img.dataset.index = index;
    img.classList.add("thumbnail");
    if (index === currentIndex) img.classList.add("active");
    img.addEventListener("click", () => selectPhoto(index));
    thumbnailList.appendChild(img);
  });
}

function selectPhoto(index) {
  if (index < 0 || index >= data.length) return;

  currentIndex = index;
  const item = data[currentIndex];

  mainPhoto.src = item.photo;
  mainPhoto.alt = item.title;
  titleText.textContent = item.title;
  subtitleText.textContent = item.description || "";

  document.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"));
  const activeThumb = document.querySelector(`.thumbnail[data-index='${currentIndex}']`);
  if (activeThumb) {
    activeThumb.classList.add("active");
    thumbnailList.scrollTo({ left: activeThumb.offsetLeft - 100, behavior: "smooth" });
  }
}

thumbnailList.addEventListener("wheel", e => {
  e.preventDefault();
  if (e.deltaY > 0) {
    selectPhoto(currentIndex + 1);
  } else {
    selectPhoto(currentIndex - 1);
  }
});

window.addEventListener("load", () => {
  createThumbnails();
  const initialTitle = "24.05.2025/13";
  const initialIndex = data.findIndex(item => item.title === initialTitle);
  selectPhoto(initialIndex !== -1 ? initialIndex : 0);
});
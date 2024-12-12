document.addEventListener("scroll", () => {
    const title = document.getElementById("main-title");
    const logo = document.getElementById("logo");
    const image = document.querySelector(".pyramid-image");
    const scrollY = window.scrollY;

    const maxScrollPhase1 = 700;
    const maxScrollPhase2 = 2000;
    const maxScrollLogoMove = 2000;
    const fadeOutTrigger = 1500; 
    const fadeOutEnd = 2100; 

    if (scrollY <= maxScrollPhase1) {
        const scrollFractionPhase1 = scrollY / maxScrollPhase1;
        const translateY = scrollFractionPhase1 * 35;
        title.style.transform = `translateY(-${translateY}vh)`;
        title.style.fontSize = `12rem`;
    } else if (scrollY > maxScrollPhase1 && scrollY <= maxScrollPhase2) {
        const scrollFractionPhase2 = (scrollY - maxScrollPhase1) / (maxScrollPhase2 - maxScrollPhase1);
        const translateY = 35 + scrollFractionPhase2 * 35;
        const fontSize = 12 - scrollFractionPhase2 * 6;
        title.style.transform = `translateY(-${translateY}vh)`;
        title.style.fontSize = `${fontSize}rem`;
    } else {
        title.style.transform = `translateY(-70vh)`;
        title.style.fontSize = `6rem`;
    }

    if (scrollY >= fadeOutTrigger) {
        const fadeFraction = (scrollY - fadeOutTrigger) / (fadeOutEnd - fadeOutTrigger);
        const opacity = Math.max(1 - fadeFraction, 0);
        title.style.opacity = opacity;
        logo.style.opacity = opacity;
    } else {
        title.style.opacity = "1";
        logo.style.opacity = "1";
    }

    if (scrollY <= maxScrollLogoMove) {
        const scrollFractionMove = scrollY / maxScrollLogoMove;
        const translateYLogo = -scrollFractionMove * 26;
        const scaleLogo = 1 - scrollFractionMove * 0.1;
        logo.style.transform = `translateY(${translateYLogo}vh) scale(${scaleLogo})`;
        logo.style.position = "relative";
    }

    const maxScroll = 2700;
    const scrollFraction = Math.min(scrollY / maxScroll, 1);
    const translateYImage = scrollFraction * 50;
    image.style.transform = `translateY(-${translateYImage}vh)`;
});
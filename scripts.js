document.addEventListener("scroll", () => {
    const title = document.getElementById("main-title");
    const image = document.querySelector(".pyramid-image");
    const scrollY = window.scrollY;

    const maxScrollPhase1 = 700;
    const maxScrollPhase2 = 1700;
    const maxScrollLogoMove = 1700;
    const fadeOutTrigger = 1500; 
    const fadeOutEnd = 2000; 

    if (scrollY <= maxScrollPhase1) {
        const scrollFractionPhase1 = scrollY / maxScrollPhase1;
        const translateY = scrollFractionPhase1 * 35;
        title.style.transform = `translateY(-${translateY}vh)`;
        title.style.fontSize = `12vw`;
    } else if (scrollY > maxScrollPhase1 && scrollY <= maxScrollPhase2) {
        const scrollFractionPhase2 = (scrollY - maxScrollPhase1) / (maxScrollPhase2 - maxScrollPhase1);
        const translateY = 35 + scrollFractionPhase2 * 35;
        const fontSize = 12 - scrollFractionPhase2 * 6;
        title.style.transform = `translateY(-${translateY}vh)`;
        title.style.fontSize = `${fontSize}vw`;
    } else {
        title.style.transform = `translateY(-70vh)`;
        title.style.fontSize = `6vw`;
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

    const maxScroll = 2700;
    const scrollFraction = Math.min(scrollY / maxScroll, 1);
    const translateYImage = scrollFraction * 50;
    image.style.transform = `translateY(-${translateYImage}vh)`;
});

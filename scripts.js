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

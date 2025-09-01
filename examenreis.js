const Description1 = "Pyro in Rijeka";
const Description2 = "Hills of the Marches";
const Description3 = "Leaning Tower of Mondavio";
const Description4 = "Sammarinese Soldiers";
const Description5 = "Francis of Assisi";
const Description6 = "Bridge in a Foggy Lisbon";
const Description7 = "Christ the King in Almada";
const Description8 = "Under the 25 de Abril Bridge";
const Description9 = "Our Lady of the Mount";
const Description10 = "Auditorio de Tenerife in Black and White";
const Description11 = "Insular Palace";
const Description12 = "Triathlon in Arrecife";
const Description13 = "Greece in Spain";
const data = [
  { title: "MORE COMING SOON", photo: "assets/images/vac2/01.jpg", description: Description1 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/02.jpg", description: Description2 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/03.jpg", description: Description3 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/04.jpg", description: Description4 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/05.jpg", description: Description5 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/06.jpg", description: Description6 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/07.jpg", description: Description7 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/08.jpg", description: Description8 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/09.jpg", description: Description9 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/10.jpg", description: Description10 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/11.jpg", description: Description11 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/12.jpg", description: Description12 },
  { title: "MORE COMING SOON", photo: "assets/images/vac2/13.jpg", description: Description13 }
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
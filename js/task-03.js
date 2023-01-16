const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listOfImages = images.map((element) => {
  const itemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = element.url;
  imgEl.alt = element.alt;
  imgEl.width = 240;
  imgEl.style.display = "block";
  imgEl.style.height = "100%";
  imgEl.style.width = "100%";

  itemEl.appendChild(imgEl);
  itemEl.style.width = "calc(100% / 3 - 60px)";
  return itemEl;
});

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.gap = "30px";
galleryEl.style.listStyle = "none";
galleryEl.append(...listOfImages);

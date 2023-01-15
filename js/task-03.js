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

const listOfImages = images.forEach((element) => {
  const itemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = element.url;
  imgEl.alt = element.alt;
  imgEl.width = 240;
  itemEl.appendChild(imgEl);
  const galleryEl = document.querySelector(".gallery");
  galleryEl.appendChild(itemEl);
  galleryEl.style.display = "flex";
  imgEl.style.display = "block";
  imgEl.style.height = "100%";
  imgEl.style.width = "100%";
  galleryEl.style.gap = "30px";
  itemEl.style.width = "calc(100% / 3 - 60px)";

  console.log(galleryEl);
});

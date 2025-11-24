const parishes = [
  { name: "Kingston",     img: "parishes/Camera_1760355457294.jpeg" },
  { name: "St. Andrew",   img: "parishes/Camera_1761045942319.jpeg" },
  { name: "St. Catherine",img: "parishes/IMG_0090.jpeg" },
  { name: "Clarendon",    img: "parishes/IMG_0142.jpeg" }
];

const grid = document.querySelector(".parish-grid");

parishes.forEach(p => {
  const card = document.createElement("div");
  card.className = "parish-card";

  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <p>${p.name}</p>
  `;

  grid.appendChild(card);
});

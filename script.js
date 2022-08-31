const title = document.querySelector(".title");
const explanation = document.querySelector(".explanation");
const img = document.querySelector(".image");
const button = document.querySelector("#button");

const KEY = "xmAlecrqnW8qaQCFDCUjvMilCXosWTwBfUXNvyzw";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;

async function getImage() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);

  displayData(data);
}

function displayData(data) {
  title.innerHTML = data.title;
  explanation.innerHTML = data.explanation;
  img.src = data.url;
}

button.addEventListener("click", getImage);

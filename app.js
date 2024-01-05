const main = document.querySelector("#content");
const apiip =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";
const render = (e) => {
  e.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.img_src;
    main.appendChild(img);
  });
};

fetch(apiip).then((x) => {
  if (x.ok) {
    x.json().then((x) => {
      render(x.photos);
    });
  } else {
    console.error("error");
  }
});

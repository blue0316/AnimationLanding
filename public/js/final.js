// imagesLoaded(document.body, () => document.body.classList.remove("loading"));

var spriteImages = document.querySelectorAll(".slide-item__image");
var spriteImagesSrc = [];
var texts = [];

for (var i = 0; i < spriteImages.length; i++) {
  var img = spriteImages[i];
  // Set the texts you want to display to each slide
  // in a sibling element of your image and edit accordingly
  if (img.nextElementSibling) {
    texts.push(img.nextElementSibling.innerHTML);
  } else {
    texts.push("");
  }
  spriteImagesSrc.push(img.getAttribute("src"));
}

var initCanvasSlideshow = new CanvasSlideshow({
  sprites: spriteImagesSrc,
  displacementImage: "/assets/pointilize.jpg",
  autoPlay: false,
  displaceScale: [300, 300],
  fullScreen: true,
  wacky: false,
  texts: texts,
  textColor: "#224d94",
  centerSprites: true,
  wacky: true,
});

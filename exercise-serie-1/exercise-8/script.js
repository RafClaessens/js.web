let slides = [
  './images/1953525_1.jpg',
  './images/Chi’s-Sweet-Home-Wallpaper.jpg',
  './images/a68bfb3aa12707c10335a4b40611719e.jpg',
  './images/jiji-photo-u3.webp',
  './images/image.jpg',
  './images/how-to-draw-a-cute-anime-cat_5b5d6c3dc022a3.00964350_108799_1_4.png',
  './images/happy_ayesir_fairytail.jpg',
  './images/hairball-have-three-cats-anime-irl-22313025.png',

];

$(document).ready(function() {
  showSlides(slides);
});

function showSlides(slides) {
  let count=0;
  setInterval(function() {
      createImage(slides[count]);
      count++;
      if(count > (slides.length-1)){
          count = 0;
      }
  }, 2000);
}

function getDimentions() {
  let maxWidth = 500; // Max width for the image
  let maxHeight = 500;    // Max height for the image
  let ratio = 0;  // Used for aspect ratio
  let width = $(this).width();    // Current image width
  let height = $(this).height();  // Current image height

  // Check if the current width is larger than the max
  if(width > maxWidth){
      ratio = maxWidth / width;   // get ratio for scaling image
      height = height * ratio;    // Reset height to match scaled image

      $(this).css("width", maxWidth); // Set new width
      $(this).css("height", height);  // Scale height based on ratio
  }

  // Check if current height is larger than max
  if(height > maxHeight){
      ratio = maxHeight / height; // get ratio for scaling image
      width = width * ratio;    // Reset width to match scaled image

      $(this).css("height", maxHeight);   // Set new height
      $(this).css("width", width);    // Scale width based on ratio
  }

  return true;
}


function createImage(fileUrl){
  let myImage = new Image();

  myImage.alt = fileUrl;
  myImage.onload = getDimentions;
  myImage.src = fileUrl;
  myImage.className = "slideshow-image";

  $(".mySlides").html(myImage);
}
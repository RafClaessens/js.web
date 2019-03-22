
var slides = [
  './images/1953525_1.jpg',
  './images/a68bfb3aa12707c10335a4b40611719e.jpg',
  './images/Chi’s-Sweet-Home-Wallpaper.jpg',
  './images/lol_1.jpg',
  './images/jiji-photo-u3.webp',
  './images/how-to-draw-a-cute-anime-cat_5b5d6c3dc022a3.00964350_108799_1_4.png',
  './images/hairball-have-three-cats-anime-irl-22313025.png',
];

function showSlides() {
	setInterval(function() {
    $('.slideshow-image').each(function(iter) {
      $this = $(this);
      var newIndex = ($this.data('index') + 1) % slides.length;
      // iterate the image
      $this.attr('src', slides[newIndex]);
      // set the new index
      $this.data('index', newIndex);
    });
  }, 2000);
}

// Set your initial images
$('#image1').attr('src', slides[0]);
$('#image1').data('index', 0);



$(document).ready(function() {
	
		showSlides();
});

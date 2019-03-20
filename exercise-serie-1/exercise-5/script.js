function plusSlides(n) {
    clearTimeout(timeout);
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    clearTimeout(timeout);
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    timeout = setTimeout(showSlides, 1000); // Change image every x seconds
  }
  
  var slideIndex = 0;
  var timeout;
  
  showSlides(slideIndex);



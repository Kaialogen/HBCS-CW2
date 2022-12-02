let slideIndex = 0;

//Function calls for automatic and manual slideshows -- Comment out the one you do not want to use;

//showSlidesManual(slideIndex);
showSlidesAutomatic();


//Function for manual slideshow index change
function plusSlides(n) {
showSlidesManual(slideIndex += n);
}

//Function for automatic slideshow index change
function plusSlides(n) {
    showSlidesAutomatic(slideIndex += n);
}


function showSlidesManual(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

function showSlidesAutomatic() {
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlidesAutomatic, 5000); // Change image every 5 seconds
}
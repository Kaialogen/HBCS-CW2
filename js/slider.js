let slideIndex = 0;

//Function calls for automatic and manual slideshows -- Comment out the one you do not want to use;

showSlidesManual(slideIndex);
showSlidesAutomatic(slideIndex);


//Function for manual slideshow index change
function plusSlides(n) {
showSlidesManual(slideIndex += n);
}

//Function for automatic slideshow index change



function showSlidesManual(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
if (n > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
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
setTimeout(showSlidesAutomatic, 10000); // Change image every 10 seconds
}
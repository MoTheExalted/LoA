"use strict";

var mainImage = document.getElementById('mainImage');
var smallImages = document.querySelectorAll('.small-images img');

function changeImage(imageSrc) {
  mainImage.src = imageSrc;
}

function cycleImages() {
  var currentIndex = 0;
  setInterval(function() {
    mainImage.src = smallImages[currentIndex].src;
    currentIndex = (currentIndex + 1) % smallImages.length;
  }, 500); // Change image every 0.5 seconds
}

cycleImages();

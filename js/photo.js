var images = document.querySelectorAll('.img');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var overlay = document.getElementById('overlay');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');
var currentImageIndex;

function openImage(image) {
  currentImageIndex = Array.from(images).indexOf(image);
  modalImage.src = image.src;
  modal.style.display = 'block';
  overlay.style.display = 'block';

  if (currentImageIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentImageIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

function closeImage() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

function changeImage(n) {
  currentImageIndex += n;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  modalImage.src = images[currentImageIndex].src;

  if (currentImageIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentImageIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}


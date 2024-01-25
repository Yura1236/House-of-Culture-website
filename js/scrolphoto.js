
  function lazyLoadImages() {
    const images = document.querySelectorAll('.img');

    images.forEach((image) => {
      const imageRect = image.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (imageRect.top < windowHeight) {
        if (!image.getAttribute('src')) {
          image.setAttribute('src', image.getAttribute('data-src'));
        }
      }
    });
  }

  window.addEventListener('scroll', lazyLoadImages);
  document.addEventListener('DOMContentLoaded', lazyLoadImages);


  
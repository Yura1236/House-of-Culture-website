window.addEventListener('scroll', function() {
  var header = document.getElementById('navigetion');
  var links = header.getElementsByClassName('nav_link');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "black";
    }

    // Изменение изображения .img-logo при скролле
    var logoImage = document.querySelector('.img-logo');
    var logoImage2 = document.querySelector('.img-logo2');
    logoImage.style.display = 'none';
    logoImage2.style.display = 'block';

    // Изменение изображения .open-img при скролле
    var openImgElement = document.querySelector('.open-img');
    var openImgElement2 = document.querySelector('.open-img2');
    openImgElement.style.display = 'none';
    openImgElement2.style.display = 'block';
  } else {
    header.classList.remove('scrolled');
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "";
    }

    // Восстановление изображений их исходных значений при отсутствии прокрутки
    var logoImage = document.querySelector('.img-logo');
    var logoImage2 = document.querySelector('.img-logo2');
    logoImage.style.display = 'block';
    logoImage2.style.display = 'none';

    var openImgElement = document.querySelector('.open-img');
    var openImgElement2 = document.querySelector('.open-img2');
    openImgElement.style.display = 'block';
    openImgElement2.style.display = 'none';
  }
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
  var openImgElement2 = document.querySelector('.open-img2');
  openImgElement2.style.transition = "opacity 0.7s ease";
  openImgElement2.style.opacity = "0";
  var openImgElement = document.querySelector('.open-img');
  openImgElement.classList.add('hidden');
}

/*Закрыть*/
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  var openImgElement2 = document.querySelector('.open-img2');
  openImgElement2.style.transition = "opacity 0.7s ease";
  openImgElement2.style.opacity = "1";

  var openImgElement = document.querySelector('.open-img');
  openImgElement.classList.remove('hidden');
}













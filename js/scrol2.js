

function openNav() {
  var myNavElement = document.getElementById("myNav");
  if (myNavElement) {
    myNavElement.style.width = "100%";
    var openImgElement2 = document.querySelector('.open-img2');
    if (openImgElement2) {
      openImgElement2.style.transition = "opacity 0.7s ease";
      openImgElement2.style.opacity = "0";
    }
    var openImgElement = document.querySelector('.open-img');
    if (openImgElement) {
      openImgElement.classList.add('hidden');
    }
  }
}

/*Закрыть*/
function closeNav() {
  var myNavElement = document.getElementById("myNav");
  if (myNavElement) {
    myNavElement.style.width = "0%";
    var openImgElement2 = document.querySelector('.open-img2');
    if (openImgElement2) {
      openImgElement2.style.transition = "opacity 0.7s ease";
      openImgElement2.style.opacity = "1";
    }
    var openImgElement = document.querySelector('.open-img');
    if (openImgElement) {
      openImgElement.classList.remove('hidden');
    }
  }
}

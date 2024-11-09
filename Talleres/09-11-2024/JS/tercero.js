const image = document.getElementById('changeableImage');

function centerImage() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const imageWidth = image.width;
  const imageHeight = image.height;

  image.style.left = (windowWidth - imageWidth) / 2 + 'px';
  image.style.top = (windowHeight - imageHeight) / 2 + 'px';
}

window.onload = centerImage;

window.onresize = centerImage;

// Imagenes para el cambio
const originalImage = 'https://i.pinimg.com/564x/b3/f1/0b/b3f10be6c1940c1dbfeebf44978d8d99.jpg';
const hoverImage = 'https://i.pinimg.com/564x/30/74/09/307409b8bf1533776fdceed5b20443ac.jpg';

image.addEventListener('mouseenter', () => {
  image.src = hoverImage;
});

image.addEventListener('mouseleave', () => {
  image.src = originalImage;
});
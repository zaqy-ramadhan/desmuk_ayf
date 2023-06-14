
document.addEventListener('DOMContentLoaded', function() {
new Splide('#car1', {
perPage: 1,
height: '30vh',
pagination: false,
arrows: true,
rewind: true,
autoplay: true,
interval: 3000,
}).mount();
});

document.addEventListener('DOMContentLoaded', function() {
new Splide('#car2', {
type: 'slide',
perPage: 4,
perMove: 1,
rewind: true,
autoplay: true,
height: '25rem',
gap: '1rem'
}).mount();
}); 

document.addEventListener('DOMContentLoaded', function() {
  new Splide('#car6', {
  type: 'slide',
  perPage: 3,
  perMove: 1,
  rewind: true,
  autoplay: true,
  height: '30rem',
  gap: '1rem'
  }).mount();
  }); 

document.addEventListener('DOMContentLoaded', function() {
    new Splide('#car3', {
    type: 'slide',
    perPage: 4,
    perMove: 1,
    rewind: true,
    autoplay: true,
    height: '15rem',
    gap: '1rem'
    }).mount();
    }); 

document.addEventListener('DOMContentLoaded', function() {
        new Splide('#car4', {
        type: 'slide',
        perPage: 4,
        perMove: 1,
        rewind: true,
        autoplay: true,
        height: '15rem',
        gap: '1rem'
  }).mount();
}); 

document.addEventListener('DOMContentLoaded', function() {
  var carousel = new Splide('#car5', {
    type: 'loop',
    perPage: 6,
    perMove: 1,
    autoplay: true,
    interval: 1000,
    height: '200px',
    gap: '1rem',
  }).mount();

  var slides = carousel.Components.Elements.slides;
  var currentSlide = slides[carousel.index];
  var leftmostSlide = slides[0];

  slides.forEach(function(slide) {
    slide.style.border = 'none';
  });

  leftmostSlide.style.border = 'solid 4px var(--primary-color)';

  carousel.on('moved', function() {
    currentSlide.style.border = 'none';
    currentSlide = slides[carousel.index];
    currentSlide.style.border = 'solid 4px var(--primary-color)';
  });
});
 

const parallax = document.querySelector('.parallax');
const parallaxItem = document.querySelector('.parallax-item');
const parallaxItem2 = document.querySelector('.parallax-item2');

parallax.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  parallaxItem.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
  parallaxItem2.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
});

(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
  }

})();
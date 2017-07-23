var quoteBlock = document.querySelector('.quote-block');
var leftSlide = document.querySelector('.slider-controls .left');
var rightSlide = document.querySelector('.slider-controls .right');
var currentSlide = 0;
var slides = document.querySelectorAll('.quote-block .quote');
var slideSpace = 240;
var y = 0;

function slideLeft() {   
  leftSlide.addEventListener ('click', function () {
  quoteBlock.style.transform = ('translateY(-' + (y - slideSpace) + 'px)');
  currentSlide--;
  y -= slideSpace;
  });
}

function slideRight() {
    rightSlide.addEventListener ('click', function () {
    quoteBlock.style.transform = ('translateY(-' + (y + slideSpace) + 'px)');
    currentSlide++;
    y += slideSpace;
  });
}

slideLeft();
slideRight();